import { describe, expect, it } from 'vitest';
import { ServiceRequestFormSchema } from './serviceRequestForm';

describe('ServiceRequestFormSchema Validation', () => {
  describe('Valid submissions', () => {
    it('should accept valid service request with all fields', () => {
      const validData = {
        name: 'Jānis Bērziņš',
        phone: '+371 25201710',
        service_type: 'mobile-service' as const,
        preferred_time: 'morning' as const,
        is_urgent: true,
        locale: 'lv' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.service_type).toBe('mobile-service');
        expect(result.data.preferred_time).toBe('morning');
        expect(result.data.is_urgent).toBe(true);
      }
    });

    it('should accept non-urgent request', () => {
      const validData = {
        name: 'John Smith',
        phone: '+44 1234 567890',
        service_type: 'pre-purchase' as const,
        preferred_time: 'afternoon' as const,
        is_urgent: false,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.is_urgent).toBe(false);
      }
    });

    it('should default is_urgent to false when not provided', () => {
      const validData = {
        name: 'Test User',
        phone: '+371 12345678',
        service_type: 'car-search' as const,
        preferred_time: 'evening' as const,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.is_urgent).toBe(false);
      }
    });

    it('should trim whitespace from text fields', () => {
      const validData = {
        name: '  Анна Иванова  ',
        phone: '  +7 123 456 7890  ',
        service_type: 'mobile-service' as const,
        preferred_time: 'morning' as const,
        is_urgent: false,
        locale: 'ru' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.name).toBe('Анна Иванова');
        expect(result.data.phone).toBe('+7 123 456 7890');
      }
    });

    it('should accept all service types', () => {
      const serviceTypes = ['pre-purchase', 'car-search', 'mobile-service'] as const;

      serviceTypes.forEach((service_type) => {
        const data = {
          name: 'Test User',
          phone: '+371 12345678',
          service_type,
          preferred_time: 'afternoon' as const,
          locale: 'en' as const,
        };

        const result = ServiceRequestFormSchema.safeParse(data);

        expect(result.success).toBe(true);
      });
    });

    it('should accept all preferred time options', () => {
      const times = ['morning', 'afternoon', 'evening'] as const;

      times.forEach((preferred_time) => {
        const data = {
          name: 'Test User',
          phone: '+371 12345678',
          service_type: 'pre-purchase' as const,
          preferred_time,
          locale: 'en' as const,
        };

        const result = ServiceRequestFormSchema.safeParse(data);

        expect(result.success).toBe(true);
      });
    });
  });

  describe('Invalid submissions', () => {
    it('should reject empty name', () => {
      const invalidData = {
        name: '',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_time: 'morning' as const,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject empty phone', () => {
      const invalidData = {
        name: 'Test User',
        phone: '',
        service_type: 'pre-purchase' as const,
        preferred_time: 'morning' as const,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should default invalid service_type to "pre-purchase"', () => {
      const invalidData = {
        name: 'Test User',
        phone: '+371 12345678',
        service_type: 'invalid-service' as any,
        preferred_time: 'morning' as const,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(invalidData);

      // Schema catches invalid and defaults to 'pre-purchase'
      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.service_type).toBe('pre-purchase');
      }
    });

    it('should default invalid preferred_time to "morning"', () => {
      const invalidData = {
        name: 'Test User',
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_time: 'midnight' as any,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(invalidData);

      // Schema catches invalid and defaults to 'morning'
      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.preferred_time).toBe('morning');
      }
    });

    it('should reject name exceeding 100 characters', () => {
      const invalidData = {
        name: 'a'.repeat(101),
        phone: '+371 12345678',
        service_type: 'pre-purchase' as const,
        preferred_time: 'morning' as const,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject phone exceeding 20 characters', () => {
      const invalidData = {
        name: 'Test User',
        phone: '+123456789012345678901',
        service_type: 'pre-purchase' as const,
        preferred_time: 'morning' as const,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });
  });

  describe('Urgent request handling', () => {
    it('should properly handle urgent flag', () => {
      const urgentRequest = {
        name: 'Emergency User',
        phone: '+371 12345678',
        service_type: 'mobile-service' as const,
        preferred_time: 'morning' as const,
        is_urgent: true,
        locale: 'en' as const,
      };

      const result = ServiceRequestFormSchema.safeParse(urgentRequest);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.is_urgent).toBe(true);
      }
    });
  });
});
