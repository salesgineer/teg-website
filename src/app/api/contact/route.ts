import type { NextRequest } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { contactFormArcjet } from '@/lib/arcjet/rules';
import { sendContactConfirmation } from '@/lib/email/resend';
import { createClient } from '@/lib/supabase/server';
import { ContactFormSchema } from '@/validations/contactForm';

/**
 * POST /api/contact
 * Handle contact form submissions
 *
 * Flow:
 * 1. Rate limiting check (Arcjet)
 * 2. Validate request body (Zod)
 * 3. Insert to Supabase contact_submissions table
 * 4. Send confirmation email to customer
 * 5. Return success/error response
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting check
    const decision = await contactFormArcjet.protect(request);

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
    const validationResult = ContactFormSchema.safeParse(body);

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
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        locale: formData.locale,
        status: 'new',
      })
      .select()
      .single();

    if (dbError) {
      Sentry.captureException(dbError, {
        tags: {
          service: 'supabase',
          operation: 'contact_insert',
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
          error: 'Failed to save contact submission',
          code: 'DATABASE_ERROR',
        },
        { status: 500 },
      );
    }

    // 4. Send confirmation email (non-blocking, errors logged but don't fail request)
    try {
      await sendContactConfirmation({
        to: formData.email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        locale: formData.locale,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      Sentry.captureException(emailError, {
        tags: {
          service: 'resend',
          operation: 'contact_confirmation',
        },
        extra: {
          submissionId: submission?.id,
          email: formData.email,
        },
      });
      console.error('Email error (non-blocking):', emailError);
    }

    // 5. Return success response
    const successMessages = {
      lv: 'Paldies par jūsu ziņojumu! Mēs sazināsimies ar jums drīzumā.',
      en: 'Thank you for your message! We will contact you soon.',
      ru: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.',
    };

    return NextResponse.json(
      {
        success: true,
        message: successMessages[formData.locale],
        submissionId: submission?.id,
      },
      { status: 201 },
    );
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        service: 'api',
        operation: 'contact_form',
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

// Disable body size limit for contact form (default 1MB should be sufficient)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
