'use client';

import { AlertCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type RoadsideAssistanceCTAProps = {
  phone: {
    display: string;
    href: string;
  };
  className?: string;
  locale?: 'lv' | 'en' | 'ru';
};

const translations = {
  lv: {
    title: 'Palīdzība uz ceļa',
    subtitle: 'Steidzama palīdzība uz vietas',
    cta: 'Zvani tūlīt',
  },
  en: {
    title: 'Roadside Assistance',
    subtitle: 'Emergency help on location',
    cta: 'Call Now',
  },
  ru: {
    title: 'Помощь на дороге',
    subtitle: 'Срочная помощь на месте',
    cta: 'Позвонить сейчас',
  },
};

export function RoadsideAssistanceCTA({
  phone,
  className = '',
  locale = 'lv',
}: RoadsideAssistanceCTAProps) {
  const t = translations[locale];

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        'group relative inline-flex shrink-0 items-center justify-center gap-2',
        'border-2 border-destructive bg-destructive/20 backdrop-blur-md',
        'text-sm font-medium whitespace-nowrap',
        'shadow-lg shadow-destructive/40',
        'transition-all duration-200',
        'hover:border-destructive hover:bg-destructive/30 hover:shadow-xl hover:shadow-destructive/50',
        'focus-visible:border-destructive focus-visible:ring-[3px] focus-visible:ring-destructive/50',
        'dark:bg-destructive/25 dark:border-destructive dark:text-white',
        className,
      )}
    >
      <Link href={phone.href}>
        {/* Small pulsing indicator */}
        <div className="relative">
          <AlertCircle className="h-4 w-4 text-white dark:text-white" />
          <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-white/50 opacity-75" />
        </div>
        <span className="font-semibold text-white dark:text-white">{t.title}</span>
        <Phone className="h-4 w-4 text-white dark:text-white" />
      </Link>
    </Button>
  );
}
