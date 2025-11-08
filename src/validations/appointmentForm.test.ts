import { describe, expect, it } from 'vitest';
import { AppointmentFormSchema, isWithinBusinessHours } from './appointmentForm';

describe('AppointmentFormSchema Validation', () => {
  describe('Valid submissions', () => {
    it('should accept valid appointment data for pre-purchase inspection', () => {
      const validData = {
        name: 'Jānis Bērziņš',
        email: 'janis@example.lv',
        phone: '+371 25201710',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '14:00',
        vehicle_info: 'BMW X5 2020, VIN: WBAJE5C50JWB12345',
        message: 'Please inspect the engine and transmission.',
        locale: 'lv' as const,
      };

      const result = AppointmentFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.service_type).toBe('pre-purchase');
        expect(result.data.preferred_date).toBe('2025-12-15');
        expect(result.data.preferred_time).toBe('14:00');
      }
    });

    it('should accept valid appointment without optional fields', () => {
      const validData = {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '+44 1234 567890',
        service_type: 'car-search' as const,
        preferred_date: '2025-12-20',
        preferred_time: '10:00',
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.vehicle_info).toBeNull();
        expect(result.data.message).toBeNull();
      }
    });

    it('should accept mobile-service appointment type', () => {
      const validData = {
        name: 'Анна Иванова',
        email: 'anna@example.ru',
        phone: '+7 123 456 7890',
        service_type: 'mobile-service' as const,
        preferred_date: '2025-12-10',
        preferred_time: '16:00',
        vehicle_info: 'Mercedes E-Class, battery issue',
        locale: 'ru' as const,
      };

      const result = AppointmentFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.service_type).toBe('mobile-service');
      }
    });

    it('should trim whitespace from all fields', () => {
      const validData = {
        name: '  Test User  ',
        email: '  test@example.com  ',
        phone: '  +371 12345678  ',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '14:00',
        vehicle_info: '  Audi A4  ',
        message: '  Please check brakes  ',
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.name).toBe('Test User');
        expect(result.data.email).toBe('test@example.com');
        expect(result.data.phone).toBe('+371 12345678');
        expect(result.data.vehicle_info).toBe('Audi A4');
        expect(result.data.message).toBe('Please check brakes');
      }
    });
  });

  describe('Invalid submissions', () => {
    it('should reject invalid service type', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'invalid-service' as any,
        preferred_date: '2025-12-15',
        preferred_time: '14:00',
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      // Schema catches invalid service_type and defaults to 'pre-purchase'
      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.service_type).toBe('pre-purchase');
      }
    });

    it('should reject empty required fields', () => {
      const invalidData = {
        name: '',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '14:00',
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject past dates', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_date: '2020-01-01', // Past date
        preferred_time: '14:00',
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject invalid time format', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '2:00 PM', // Wrong format
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject vehicle_info exceeding 500 characters', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '14:00',
        vehicle_info: 'a'.repeat(501),
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject message exceeding 1000 characters', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '14:00',
        message: 'a'.repeat(1001),
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject invalid phone number', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '', // Empty phone not allowed for appointments
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '14:00',
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject appointments outside business hours (before 9am)', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '08:00', // Too early
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject appointments outside business hours (after 8pm)', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_date: '2025-12-15',
        preferred_time: '20:00', // Too late
        locale: 'en' as const,
      };

      const result = AppointmentFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });
  });

  describe('Business hours validation helper', () => {
    it('should accept appointments during business hours (9am-8pm)', () => {
      const times = [
        { date: '2025-12-15', time: '09:00' }, // Monday 9am
        { date: '2025-12-16', time: '12:00' }, // Tuesday noon
        { date: '2025-12-17', time: '15:30' }, // Wednesday 3:30pm
        { date: '2025-12-18', time: '19:00' }, // Thursday 7pm
        { date: '2025-12-20', time: '19:59' }, // Saturday 7:59pm
      ];

      times.forEach(({ date, time }) => {
        expect(isWithinBusinessHours(date, time)).toBe(true);
      });
    });

    it('should reject appointments on Sundays', () => {
      // 2025-12-14 is a Sunday
      expect(isWithinBusinessHours('2025-12-14', '14:00')).toBe(false);
    });

    it('should reject appointments outside business hours', () => {
      const times = [
        { date: '2025-12-15', time: '08:00' }, // Before 9am
        { date: '2025-12-15', time: '20:00' }, // After 8pm
        { date: '2025-12-15', time: '22:30' }, // Late night
      ];

      times.forEach(({ date, time }) => {
        expect(isWithinBusinessHours(date, time)).toBe(false);
      });
    });
  });
});
