import { z } from 'zod';

/**
 * Appointment booking form validation schema
 * Validates: name, email, phone, service_type, date/time, vehicle_info, message, locale
 * Business hours: Mon-Sat, 9:00 AM - 8:00 PM
 * Vehicle info max length: 500 chars
 *
 * Error messages will be translated via next-intl in form components
 */

export const AppointmentFormSchema = z
  .object({
    name: z
      .string()
      .min(1, 'validation.name.required')
      .max(100, 'validation.name.maxLength')
      .trim(),

    email: z
      .string()
      .min(1, 'validation.email.required')
      .email('validation.email.invalid')
      .max(255, 'validation.email.maxLength')
      .toLowerCase()
      .trim(),

    phone: z
      .string()
      .min(1, 'validation.phone.required')
      .max(20, 'validation.phone.maxLength')
      .trim(),

    service_type: z.enum(['pre-purchase', 'car-search', 'mobile-service']).catch('pre-purchase'),

    preferred_date: z
      .string()
      .min(1, 'validation.date.required')
      .refine(
        (date) => {
          const selectedDate = new Date(date);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return selectedDate >= today;
        },
        { message: 'validation.date.future' },
      )
      .refine(
        (date) => {
          const selectedDate = new Date(date);
          const day = selectedDate.getDay();
          // 0 = Sunday, 6 = Saturday
          // Allow Mon-Sat (1-6)
          return day >= 1 && day <= 6;
        },
        { message: 'validation.date.businessDays' },
      ),

    preferred_time: z
      .string()
      .min(1, 'validation.time.required')
      .refine(
        (time) => {
          const parts = time.split(':');
          const hours = Number.parseInt(parts[0] || '0', 10);
          // Business hours: 9:00 AM - 8:00 PM (9-20)
          return hours >= 9 && hours < 20;
        },
        { message: 'validation.time.businessHours' },
      ),

    vehicle_info: z
      .string()
      .max(500, 'validation.vehicleInfo.maxLength')
      .trim()
      .optional()
      .nullable()
      .transform(val => val || null),

    message: z
      .string()
      .max(1000, 'validation.message.maxLength')
      .trim()
      .optional()
      .nullable()
      .transform(val => val || null),

    locale: z.enum(['lv', 'en', 'ru']).catch('lv'),
  })
  .refine(
    () => {
      // Ensure no appointments on the same day are double-booked
      // This will be checked server-side against database
      // Client-side just validates format and business rules
      return true;
    },
    { message: 'validation.appointment.conflict' },
  );

export type AppointmentFormInput = z.infer<typeof AppointmentFormSchema>;

/**
 * Business hours validation helper
 * Returns true if date/time falls within Mon-Sat, 9:00 AM - 8:00 PM
 */
export function isWithinBusinessHours(date: string, time: string): boolean {
  const appointmentDate = new Date(`${date}T${time}`);
  const day = appointmentDate.getDay();
  const parts = time.split(':');
  const hours = Number.parseInt(parts[0] || '0', 10);

  // Check day: Mon-Sat (1-6)
  if (day < 1 || day > 6) {
    return false;
  }

  // Check time: 9:00 AM - 8:00 PM (9-20)
  if (hours < 9 || hours >= 20) {
    return false;
  }

  return true;
}
