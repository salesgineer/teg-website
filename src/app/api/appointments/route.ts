import type { NextRequest } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { appointmentArcjet } from '@/lib/arcjet/rules';
import { sendAppointmentConfirmation } from '@/lib/email/resend';
import { calculateEndTime, createCalendarEvent, generateIcsFile } from '@/lib/google-calendar';
import { createClient } from '@/lib/supabase/server';
import { AppointmentFormSchema, isWithinBusinessHours } from '@/validations/appointmentForm';

/**
 * POST /api/appointments
 * Handle appointment booking submissions
 *
 * Flow:
 * 1. Rate limiting check (Arcjet)
 * 2. Validate request body (Zod)
 * 3. Validate business hours
 * 4. Check for double-booking
 * 5. Create Google Calendar event
 * 6. Insert to Supabase appointments table
 * 7. Send confirmation email with .ics attachment
 * 8. Return success/error response
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting check
    const decision = await appointmentArcjet.protect(request);

    if (decision.isDenied()) {
      const rateLimitMessages = {
        lv: 'Pārāk daudz rezervācijas pieprasījumu. Lūdzu, mēģiniet vēlāk.',
        en: 'Too many booking requests. Please try again later.',
        ru: 'Слишком много запросов на бронирование. Пожалуйста, попробуйте позже.',
      };

      return NextResponse.json(
        {
          error: rateLimitMessages.en,
          code: 'RATE_LIMIT_EXCEEDED',
        },
        { status: 429 },
      );
    }

    // 2. Parse and validate request body
    const body = await request.json();
    const validationResult = AppointmentFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          code: 'VALIDATION_ERROR',
          details: validationResult.error.flatten(),
        },
        { status: 400 },
      );
    }

    const formData = validationResult.data;

    // 3. Validate business hours (server-side check)
    if (!isWithinBusinessHours(formData.preferred_date, formData.preferred_time)) {
      const businessHoursMessages = {
        lv: 'Darba laiks: Pirmdien-Sestdien, 9:00-20:00',
        en: 'Business hours: Monday-Saturday, 9:00 AM - 8:00 PM',
        ru: 'Рабочие часы: Понедельник-Суббота, 9:00-20:00',
      };

      return NextResponse.json(
        {
          error: businessHoursMessages[formData.locale],
          code: 'OUTSIDE_BUSINESS_HOURS',
        },
        { status: 400 },
      );
    }

    // 4. Check for double-booking (same date/time)
    const supabase = await createClient();
    const { data: existingAppointment } = await supabase
      .from('appointments')
      .select('id')
      .eq('preferred_date', formData.preferred_date)
      .eq('preferred_time', formData.preferred_time)
      .neq('status', 'cancelled')
      .single();

    if (existingAppointment) {
      const conflictMessages = {
        lv: 'Šis laiks jau ir aizņemts. Lūdzu, izvēlieties citu laiku.',
        en: 'This time slot is already booked. Please choose a different time.',
        ru: 'Это время уже занято. Пожалуйста, выберите другое время.',
      };

      return NextResponse.json(
        {
          error: conflictMessages[formData.locale],
          code: 'TIME_CONFLICT',
        },
        { status: 409 },
      );
    }

    // 5. Create Google Calendar event
    let googleCalendarEventId: string | undefined;
    const startDateTime = `${formData.preferred_date}T${formData.preferred_time}:00`;
    const endDateTime = calculateEndTime(startDateTime, 1); // 1 hour duration

    const serviceNames = {
      'pre-purchase': {
        lv: 'Automašīnas pārbaude pirms pirkuma',
        en: 'Pre-Purchase Car Inspection',
        ru: 'Проверка автомобиля перед покупкой',
      },
      'car-search': {
        lv: 'Automašīnas meklēšana un piegāde',
        en: 'Car Search & Delivery',
        ru: 'Поиск и доставка автомобиля',
      },
      'mobile-service': {
        lv: 'Mobilais ceļu palīdzības serviss',
        en: 'Mobile Roadside Service',
        ru: 'Мобильная служба помощи на дороге',
      },
    };

    try {
      const calendarResult = await createCalendarEvent({
        summary: `TEG: ${serviceNames[formData.service_type][formData.locale]}`,
        description: `Customer: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}${formData.vehicle_info ? `\nVehicle: ${formData.vehicle_info}` : ''}${formData.message ? `\nNotes: ${formData.message}` : ''}`,
        startDateTime,
        endDateTime,
        attendeeEmail: formData.email,
        attendeeName: formData.name,
      });

      if (calendarResult.success) {
        googleCalendarEventId = calendarResult.eventId;
      } else {
        // Log but don't fail request if calendar integration fails
        console.warn('Google Calendar event creation failed (non-blocking):', calendarResult.error);
      }
    } catch (calendarError) {
      Sentry.captureException(calendarError, {
        tags: {
          service: 'google-calendar',
          operation: 'create_event',
        },
        extra: {
          formData: {
            name: formData.name,
            email: formData.email,
            date: formData.preferred_date,
            time: formData.preferred_time,
          },
        },
      });
      console.error('Google Calendar error (non-blocking):', calendarError);
    }

    // 6. Insert to Supabase
    const { data: appointment, error: dbError } = await supabase
      .from('appointments')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.service_type,
        preferred_date: formData.preferred_date,
        preferred_time: formData.preferred_time,
        vehicle_info: formData.vehicle_info,
        message: formData.message,
        locale: formData.locale,
        google_calendar_event_id: googleCalendarEventId,
        status: 'pending',
      })
      .select()
      .single();

    if (dbError) {
      Sentry.captureException(dbError, {
        tags: {
          service: 'supabase',
          operation: 'appointment_insert',
        },
        extra: {
          formData: {
            name: formData.name,
            email: formData.email,
            locale: formData.locale,
          },
        },
      });

      console.error('Database error:', dbError);

      return NextResponse.json(
        {
          error: 'Failed to save appointment',
          code: 'DATABASE_ERROR',
        },
        { status: 500 },
      );
    }

    // 7. Send confirmation email with .ics attachment
    try {
      const icsFile = generateIcsFile({
        summary: `TEG: ${serviceNames[formData.service_type][formData.locale]}`,
        description: `Appointment with TEG\nService: ${serviceNames[formData.service_type][formData.locale]}`,
        startDateTime,
        endDateTime,
        attendeeEmail: formData.email,
      });

      await sendAppointmentConfirmation({
        to: formData.email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.service_type,
        preferredDate: formData.preferred_date,
        preferredTime: formData.preferred_time,
        vehicleInfo: formData.vehicle_info,
        message: formData.message,
        locale: formData.locale,
        googleCalendarEventId,
        icsAttachment: icsFile,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      Sentry.captureException(emailError, {
        tags: {
          service: 'resend',
          operation: 'appointment_confirmation',
        },
        extra: {
          appointmentId: appointment?.id,
          email: formData.email,
        },
      });
      console.error('Email error (non-blocking):', emailError);
    }

    // 8. Return success response
    const successMessages = {
      lv: 'Jūsu tikšanās ir apstiprināta! Mēs sazināsimies ar jums 24 stundu laikā.',
      en: 'Your appointment is confirmed! We will contact you within 24 hours.',
      ru: 'Ваша встреча подтверждена! Мы свяжемся с вами в течение 24 часов.',
    };

    return NextResponse.json(
      {
        success: true,
        message: successMessages[formData.locale],
        appointmentId: appointment?.id,
        googleCalendarEventId,
      },
      { status: 201 },
    );
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        service: 'api',
        operation: 'appointment_booking',
      },
    });

    console.error('Unexpected error:', error);

    return NextResponse.json(
      {
        error: 'An unexpected error occurred',
        code: 'INTERNAL_ERROR',
      },
      { status: 500 },
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
