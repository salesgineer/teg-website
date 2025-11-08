import { describe, expect, it } from 'vitest';
import { ContactFormSchema } from './contactForm';

describe('ContactFormSchema Validation', () => {
  describe('Valid submissions', () => {
    it('should accept valid contact form data with all fields', () => {
      const validData = {
        name: 'Jānis Bērziņš',
        email: 'janis@example.lv',
        phone: '+371 25201710',
        message: 'Es vēlos pasūtīt auto pārbaudi.',
        locale: 'lv' as const,
      };

      const result = ContactFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.name).toBe('Jānis Bērziņš');
        expect(result.data.email).toBe('janis@example.lv');
        expect(result.data.phone).toBe('+371 25201710');
        expect(result.data.locale).toBe('lv');
      }
    });

    it('should accept valid data without phone number', () => {
      const validData = {
        name: 'John Smith',
        email: 'john@example.com',
        phone: null,
        message: 'I would like to book a pre-purchase inspection.',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.phone).toBeNull();
      }
    });

    it('should trim whitespace from text fields', () => {
      const validData = {
        name: '  Анна Иванова  ',
        email: '  anna@example.ru  ',
        phone: '  +7 123 456 7890  ',
        message: '  Хочу заказать проверку авто.  ',
        locale: 'ru' as const,
      };

      const result = ContactFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.name).toBe('Анна Иванова');
        expect(result.data.email).toBe('anna@example.ru');
        expect(result.data.phone).toBe('+7 123 456 7890');
        expect(result.data.message).toBe('Хочу заказать проверку авто.');
      }
    });

    it('should convert email to lowercase', () => {
      const validData = {
        name: 'Test User',
        email: 'TEST@EXAMPLE.COM',
        message: 'Test message',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(validData);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.email).toBe('test@example.com');
      }
    });
  });

  describe('Invalid submissions', () => {
    it('should reject empty name', () => {
      const invalidData = {
        name: '',
        email: 'test@example.com',
        message: 'Test message',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject invalid email format', () => {
      const invalidData = {
        name: 'Test User',
        email: 'not-an-email',
        message: 'Test message',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject name exceeding 100 characters', () => {
      const invalidData = {
        name: 'a'.repeat(101),
        email: 'test@example.com',
        message: 'Test message',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject email exceeding 255 characters', () => {
      const invalidData = {
        name: 'Test User',
        email: `${'a'.repeat(250)}@test.com`,
        message: 'Test message',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject phone exceeding 20 characters', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+123456789012345678901',
        message: 'Test message',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject message exceeding 1000 characters', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'a'.repeat(1001),
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should reject empty message', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        message: '',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(invalidData);

      expect(result.success).toBe(false);
    });

    it('should default to "lv" locale if invalid locale provided', () => {
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
        locale: 'invalid-locale',
      };

      const result = ContactFormSchema.safeParse(data);

      expect(result.success).toBe(true);

      if (result.success) {
        expect(result.data.locale).toBe('lv');
      }
    });
  });

  describe('Security: SQL injection and XSS attempts', () => {
    it('should handle SQL injection attempts in name field', () => {
      const sqlInjection = {
        name: '\'; DROP TABLE users; --',
        email: 'test@example.com',
        message: 'Test message',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(sqlInjection);

      expect(result.success).toBe(true);

      if (result.success) {
        // Data is sanitized (trimmed) but not rejected - DB layer handles SQL injection protection
        expect(result.data.name).toBe('\'; DROP TABLE users; --');
      }
    });

    it('should handle XSS attempts in message field', () => {
      const xssAttempt = {
        name: 'Test User',
        email: 'test@example.com',
        message: '<script>alert("XSS")</script>',
        locale: 'en' as const,
      };

      const result = ContactFormSchema.safeParse(xssAttempt);

      expect(result.success).toBe(true);

      if (result.success) {
        // Zod validation accepts the string - React will escape it when rendering
        expect(result.data.message).toBe('<script>alert("XSS")</script>');
      }
    });
  });
});
