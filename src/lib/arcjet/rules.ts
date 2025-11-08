import arcjet, { fixedWindow, shield } from '@arcjet/next';
import { Env } from '@/libs/Env';

/**
 * Arcjet rate limiting rules for TEG form submissions
 * All rules identify users by IP address for abuse prevention
 *
 * Contact form: 5 submissions per minute per IP
 * Appointments: 3 submissions per hour per IP
 * Service requests: 5 submissions per hour per IP
 * Email sending: 10 emails per hour per IP
 */

/**
 * Contact form rate limiting
 * Allows 5 submissions per minute per IP
 */
export const contactFormArcjet = arcjet({
  key: Env.ARCJET_KEY ?? '',
  characteristics: ['ip.src'],
  rules: [
    shield({ mode: 'LIVE' }),
    fixedWindow({
      mode: 'LIVE',
      window: '1m',
      max: 5,
    }),
  ],
});

/**
 * Appointment booking rate limiting
 * Allows 3 submissions per hour per IP
 * Stricter to prevent appointment spam
 */
export const appointmentArcjet = arcjet({
  key: Env.ARCJET_KEY ?? '',
  characteristics: ['ip.src'],
  rules: [
    shield({ mode: 'LIVE' }),
    fixedWindow({
      mode: 'LIVE',
      window: '1h',
      max: 3,
    }),
  ],
});

/**
 * Service request rate limiting
 * Allows 5 submissions per hour per IP
 * Balanced for quick callback requests
 */
export const serviceRequestArcjet = arcjet({
  key: Env.ARCJET_KEY ?? '',
  characteristics: ['ip.src'],
  rules: [
    shield({ mode: 'LIVE' }),
    fixedWindow({
      mode: 'LIVE',
      window: '1h',
      max: 5,
    }),
  ],
});

/**
 * Email sending rate limiting
 * Prevents email abuse/spam
 * Allows 10 emails per hour per sender
 */
export const emailArcjet = arcjet({
  key: Env.ARCJET_KEY ?? '',
  characteristics: ['ip.src'],
  rules: [
    shield({ mode: 'LIVE' }),
    fixedWindow({
      mode: 'LIVE',
      window: '1h',
      max: 10,
    }),
  ],
});

// Legacy exports for backward compatibility
export const contactFormRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '60s',
  max: 5,
} as const;

export const appointmentRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '1h',
  max: 3,
} as const;

export const serviceRequestRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '1h',
  max: 5,
} as const;

export const emailRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '1h',
  max: 10,
} as const;
