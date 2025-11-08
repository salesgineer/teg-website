import type { Buffer } from 'node:buffer';
import * as Sentry from '@sentry/nextjs';
import { Resend } from 'resend';
import { Env } from '@/libs/Env';

/**
 * Resend email client - lazy loaded to avoid build-time errors
 * Initialized with API key from environment variables
 */
export function getResendClient() {
  return new Resend(Env.RESEND_API_KEY || '');
}

/**
 * Email sending utility with error handling and Sentry logging
 */
export type SendEmailParams = {
  to: string | string[];
  subject: string;
  react: React.ReactElement;
  from?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
  }>;
};

export async function sendEmail({
  to,
  subject,
  react,
  from = Env.RESEND_FROM_EMAIL || 'noreply@teg.lv',
  replyTo,
  attachments,
}: SendEmailParams) {
  try {
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      react,
      replyTo,
      attachments,
    });

    if (error) {
      Sentry.captureException(error, {
        tags: {
          service: 'resend',
          operation: 'send_email',
        },
        extra: {
          to,
          subject,
          from,
        },
      });
      console.error('Resend email error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        service: 'resend',
        operation: 'send_email',
      },
      extra: {
        to,
        subject,
        from,
      },
    });
    console.error('Unexpected email error:', error);
    return { success: false, error };
  }
}

/**
 * Send contact form confirmation email
 */
export async function sendContactConfirmation(params: {
  to: string;
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  locale: 'lv' | 'en' | 'ru';
}) {
  const { ContactConfirmationEmail } = await import('@/emails/ContactConfirmation');

  const subjects = {
    lv: 'Paldies par jūsu ziņojumu - TEG',
    en: 'Thank you for your message - TEG',
    ru: 'Спасибо за ваше сообщение - TEG',
  };

  return sendEmail({
    to: params.to,
    subject: subjects[params.locale],
    react: ContactConfirmationEmail({
      name: params.name,
      email: params.email,
      phone: params.phone || undefined,
      message: params.message,
      locale: params.locale,
    }),
  });
}

/**
 * Send appointment confirmation email
 */
export async function sendAppointmentConfirmation(params: {
  to: string;
  name: string;
  email: string;
  phone: string;
  serviceType: 'pre-purchase' | 'car-search' | 'mobile-service';
  preferredDate: string;
  preferredTime: string;
  vehicleInfo?: string | null;
  message?: string | null;
  locale: 'lv' | 'en' | 'ru';
  googleCalendarEventId?: string;
  icsAttachment?: Buffer;
}) {
  const { AppointmentConfirmationEmail } = await import('@/emails/AppointmentConfirmation');

  const subjects = {
    lv: 'Jūsu tikšanās ir apstiprināta - TEG',
    en: 'Your appointment is confirmed - TEG',
    ru: 'Ваша встреча подтверждена - TEG',
  };

  const attachments = params.icsAttachment
    ? [
        {
          filename: 'appointment.ics',
          content: params.icsAttachment,
        },
      ]
    : undefined;

  return sendEmail({
    to: params.to,
    subject: subjects[params.locale],
    react: AppointmentConfirmationEmail({
      name: params.name,
      email: params.email,
      phone: params.phone,
      serviceType: params.serviceType,
      preferredDate: params.preferredDate,
      preferredTime: params.preferredTime,
      vehicleInfo: params.vehicleInfo || undefined,
      message: params.message || undefined,
      locale: params.locale,
      googleCalendarEventId: params.googleCalendarEventId,
    }),
    attachments,
  });
}

/**
 * Send service request confirmation email
 */
export async function sendServiceRequestConfirmation(params: {
  to: string;
  name: string;
  phone: string;
  serviceType: 'pre-purchase' | 'car-search' | 'mobile-service';
  preferredTime: 'morning' | 'afternoon' | 'evening';
  isUrgent: boolean;
  locale: 'lv' | 'en' | 'ru';
}) {
  const { ServiceRequestConfirmationEmail } = await import('@/emails/ServiceRequestConfirmation');

  const subjects = {
    lv: params.isUrgent ? 'Steidzams pieprasījums saņemts - TEG' : 'Pieprasījums saņemts - TEG',
    en: params.isUrgent ? 'Urgent request received - TEG' : 'Request received - TEG',
    ru: params.isUrgent ? 'Срочный запрос получен - TEG' : 'Запрос получен - TEG',
  };

  return sendEmail({
    to: params.to,
    subject: subjects[params.locale],
    react: ServiceRequestConfirmationEmail({
      name: params.name,
      phone: params.phone,
      serviceType: params.serviceType,
      preferredTime: params.preferredTime,
      isUrgent: params.isUrgent,
      locale: params.locale,
    }),
  });
}

/**
 * Send notification to TEG team for service requests
 */
export async function sendTeamNotification(params: {
  customerName: string;
  phone: string;
  serviceType: 'pre-purchase' | 'car-search' | 'mobile-service';
  preferredTime: 'morning' | 'afternoon' | 'evening';
  isUrgent: boolean;
}) {
  const { TeamNotificationEmail } = await import('@/emails/TeamNotification');

  const serviceNames = {
    'pre-purchase': 'Pre-Purchase Inspection',
    'car-search': 'Car Search & Delivery',
    'mobile-service': 'Mobile Roadside Service',
  };

  const urgencyLabel = params.isUrgent ? '🚨 URGENT' : '📋 New';

  // Note: Replace with actual TEG team email
  const teamEmail = 'info@teg.lv';

  return sendEmail({
    to: teamEmail,
    subject: `${urgencyLabel} Service Request: ${serviceNames[params.serviceType]}`,
    react: TeamNotificationEmail({
      customerName: params.customerName,
      phone: params.phone,
      serviceType: params.serviceType,
      preferredTime: params.preferredTime,
      isUrgent: params.isUrgent,
    }),
    replyTo: params.phone, // Allow direct reply via phone/SMS
  });
}
