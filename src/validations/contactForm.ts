import { z } from 'zod';

/**
 * Contact form validation schema
 * Validates: name, email, phone (optional), message, locale
 * Max lengths: name (100), email (255), phone (20), message (1000)
 *
 * Error messages will be translated via next-intl in form components
 */

export const ContactFormSchema = z.object({
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
    .union([z.string().max(20, 'validation.phone.maxLength').trim(), z.null()])
    .default(null), // Optional phone field

  message: z
    .string()
    .min(1, 'validation.message.required')
    .max(1000, 'validation.message.maxLength')
    .trim(),

  locale: z.enum(['lv', 'en', 'ru']).catch('lv'),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
