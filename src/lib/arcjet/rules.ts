/**
 * Arcjet rate limiting rules for TEG form submissions
 *
 * - Contact form: 5 submissions per minute per IP
 * - Appointments: 3 submissions per hour per IP
 * - Service requests: 5 submissions per hour per IP
 *
 * All rules identify users by IP address for abuse prevention
 *
 * TODO: Implement Arcjet integration when @arcjet/next API is finalized
 */

/**
 * Contact form rate limit: 5 submissions per minute
 * Prevents spam while allowing legitimate rapid inquiries
 */
export const contactFormRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '60s',
  max: 5,
} as const;

/**
 * Appointment booking rate limit: 3 submissions per hour
 * More restrictive to prevent calendar spam
 */
export const appointmentRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '1h',
  max: 3,
} as const;

/**
 * Service request rate limit: 5 submissions per hour
 * Balances abuse prevention with legitimate callback requests
 */
export const serviceRequestRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '1h',
  max: 5,
} as const;

/**
 * Email sending rate limit: 10 emails per hour per sender
 * Prevents email abuse/spam at the service level
 * Applied in email utility functions
 */
export const emailRateLimit = {
  mode: 'LIVE',
  characteristics: ['ip.src'],
  window: '1h',
  max: 10,
} as const;
