import type { Database } from './database.types';

/**
 * Form data types derived from database schema
 * Used for type-safe form handling with react-hook-form and Zod
 */

// Contact form submission data
export type ContactFormData = Database['public']['Tables']['contact_submissions']['Insert'];

// Appointment booking form data
export type AppointmentFormData = Database['public']['Tables']['appointments']['Insert'];

// Service request form data
export type ServiceRequestFormData = Database['public']['Tables']['service_requests']['Insert'];

// Locale type for multi-language support
export type Locale = 'lv' | 'en' | 'ru';

// Service type enum for reusability
export type ServiceType = 'pre-purchase' | 'car-search' | 'mobile-service';

// Preferred time enum for service requests
export type PreferredTime = 'morning' | 'afternoon' | 'evening';
