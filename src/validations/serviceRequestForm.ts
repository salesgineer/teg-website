import { z } from 'zod';

/**
 * Service request (quick callback) form validation schema
 * Validates: name, phone, service_type, preferred_time, is_urgent, locale
 * Minimal validation for fast callback requests
 *
 * Error messages will be translated via next-intl in form components
 */

export const ServiceRequestFormSchema = z.object({
  name: z
    .string()
    .min(1, 'validation.name.required')
    .max(100, 'validation.name.maxLength')
    .trim(),

  phone: z
    .string()
    .min(1, 'validation.phone.required')
    .max(20, 'validation.phone.maxLength')
    .trim(),

  service_type: z.enum(['pre-purchase', 'car-search', 'mobile-service']).catch('pre-purchase'),

  preferred_time: z.enum(['morning', 'afternoon', 'evening']).catch('morning'),

  is_urgent: z.boolean().default(false),

  locale: z.enum(['lv', 'en', 'ru']).catch('lv'),
});

export type ServiceRequestFormInput = z.infer<typeof ServiceRequestFormSchema>;
