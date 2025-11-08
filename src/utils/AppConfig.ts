import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'always';

// TEG Website Configuration
export const AppConfig = {
  name: 'TEG - Transporta Ekspertu Grupa',
  locales: ['lv', 'en', 'ru'],
  defaultLocale: 'lv',
  localePrefix,
};
