'use client';

import { Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { MobileNav } from './MobileNav';

export function Header() {
  const t = useTranslations('navigation');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-primary">TEG</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('home')}
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('services')}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('about')}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('contact')}
          </Link>
          <Link
            href="/appointments"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('appointments')}
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Phone Number (hidden on mobile) */}
          <a
            href="tel:+37125201710"
            className="hidden items-center space-x-2 text-sm font-medium lg:flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>+371 25 201 710</span>
          </a>

          {/* Language Switcher */}
          <LocaleSwitcher />

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
