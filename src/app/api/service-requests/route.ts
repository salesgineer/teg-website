import type { NextRequest } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { serviceRequestArcjet } from '@/lib/arcjet/rules';
import { sendServiceRequestConfirmation, sendTeamNotification } from '@/lib/email/resend';
import { createClient } from '@/lib/supabase/server';
import { ServiceRequestFormSchema } from '@/validations/serviceRequestForm';

/**
 * POST /api/service-requests
 * Handle quick callback service requests
 *
 * Flow:
 * 1. Rate limiting check (Arcjet)
 * 2. Validate request body (Zod)
 * 3. Insert to Supabase service_requests table
 * 4. Send confirmation email to customer
 * 5. Send notification to TEG team (especially for urgent requests)
 * 6. Return success/error response
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting check
    const decision = await serviceRequestArcjet.protect(request);

    if (decision.isDenied()) {
      const rateLimitMessages = {
        lv: 'Pārāk daudz pieprasījumu. Lūdzu, mēģiniet vēlāk.',
        en: 'Too many requests. Please try again later.',
        ru: 'Слишком много запросов. Пожалуйста, попробуйте позже.',
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
    const validationResult = ServiceRequestFormSchema.safeParse(body);

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

    // 3. Insert to Supabase
    const supabase = await createClient();
    const { data: serviceRequest, error: dbError } = await supabase
      .from('service_requests')
      .insert({
        name: formData.name,
        phone: formData.phone,
        service_type: formData.service_type,
        preferred_time: formData.preferred_time,
        is_urgent: formData.is_urgent,
        locale: formData.locale,
        status: 'new',
      })
      .select()
      .single();

    if (dbError) {
      Sentry.captureException(dbError, {
        tags: {
          service: 'supabase',
          operation: 'service_request_insert',
        },
        extra: {
          formData: {
            name: formData.name,
            phone: formData.phone,
            locale: formData.locale,
            is_urgent: formData.is_urgent,
          },
        },
      });

      console.error('Database error:', dbError);

      return NextResponse.json(
        {
          error: 'Failed to save service request',
          code: 'DATABASE_ERROR',
        },
        { status: 500 },
      );
    }

    // 4. Send confirmation email to customer (non-blocking)
    try {
      await sendServiceRequestConfirmation({
        to: formData.phone, // Note: Service requests are phone-based, may not have email
        name: formData.name,
        phone: formData.phone,
        serviceType: formData.service_type,
        preferredTime: formData.preferred_time,
        isUrgent: formData.is_urgent,
        locale: formData.locale,
      });
    } catch (emailError) {
      // Log but don't fail - service requests are phone-based
      Sentry.captureException(emailError, {
        tags: {
          service: 'resend',
          operation: 'service_request_confirmation',
        },
        extra: {
          serviceRequestId: serviceRequest?.id,
          phone: formData.phone,
        },
      });
      console.error('Customer email error (non-blocking):', emailError);
    }

    // 5. Send notification to TEG team (especially urgent requests)
    try {
      await sendTeamNotification({
        customerName: formData.name,
        phone: formData.phone,
        serviceType: formData.service_type,
        preferredTime: formData.preferred_time,
        isUrgent: formData.is_urgent,
      });
    } catch (teamEmailError) {
      // Log team notification error but don't fail request
      Sentry.captureException(teamEmailError, {
        tags: {
          service: 'resend',
          operation: 'team_notification',
        },
        extra: {
          serviceRequestId: serviceRequest?.id,
          is_urgent: formData.is_urgent,
        },
      });
      console.error('Team notification error (non-blocking):', teamEmailError);
    }

    // 6. Return success response
    const successMessages = {
      lv: formData.is_urgent
        ? 'Steidzams pieprasījums saņemts! Mēs sazināsimies ar jums 1-2 stundu laikā.'
        : 'Pieprasījums saņemts! Mēs sazināsimies ar jums tuvākajā laikā.',
      en: formData.is_urgent
        ? 'Urgent request received! We will contact you within 1-2 hours.'
        : 'Request received! We will contact you soon.',
      ru: formData.is_urgent
        ? 'Срочный запрос получен! Мы свяжемся с вами в течение 1-2 часов.'
        : 'Запрос получен! Мы свяжемся с вами в ближайшее время.',
    };

    return NextResponse.json(
      {
        success: true,
        message: successMessages[formData.locale],
        serviceRequestId: serviceRequest?.id,
        isUrgent: formData.is_urgent,
      },
      { status: 201 },
    );
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        service: 'api',
        operation: 'service_request',
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
      sizeLimit: '512kb', // Smaller limit for quick requests
    },
  },
};
