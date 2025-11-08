/**
 * i18n Configuration for TEG Website
 *
 * Multi-language support for Latvian (lv), English (en), and Russian (ru)
 * - Default locale: lv (Latvian - primary language)
 * - Locale prefix: 'always' - all routes include locale prefix (/lv/, /en/, /ru/)
 * - Middleware handles automatic locale detection and routing
 */

export const locales = ['lv', 'en', 'ru'] as const;
export const defaultLocale = 'lv' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  lv: 'Latviešu',
  en: 'English',
  ru: 'Русский',
};

export const localeLabels: Record<Locale, string> = {
  lv: 'LAT',
  en: 'ENG',
  ru: 'RUS',
};
