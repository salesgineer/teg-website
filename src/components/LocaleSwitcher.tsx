'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { localeNames } from '@/i18n/config';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleValueChange = (value: string) => {
    router.push(`/${value}${pathname}`);
    router.refresh(); // Ensure the page takes the new locale into account related to the issue #395
  };

  return (
    <Select value={locale} onValueChange={handleValueChange}>
      <SelectTrigger
        className="w-fit min-w-[120px] font-medium"
        aria-label="lang-switcher"
      >
        <SelectValue>
          {localeNames[locale as keyof typeof localeNames]}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map(loc => (
          <SelectItem key={loc} value={loc}>
            {localeNames[loc as keyof typeof localeNames]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
