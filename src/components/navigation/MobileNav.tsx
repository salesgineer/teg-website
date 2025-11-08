'use client';

import { Facebook, Instagram, Menu, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('navigation');

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="mt-8 flex flex-col space-y-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="mb-4 flex items-center space-x-2"
          >
            <span className="text-2xl font-bold tracking-tight text-primary">TEG</span>
          </Link>

          <Separator />

          {/* Navigation Links */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            {t('home')}
          </Link>
          <Link
            href="/services"
            onClick={handleLinkClick}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            {t('services')}
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            {t('about')}
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            {t('contact')}
          </Link>
          <Link
            href="/appointments"
            onClick={handleLinkClick}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            {t('appointments')}
          </Link>

          <Separator />

          {/* Contact Information */}
          <div className="space-y-3">
            <a
              href="tel:+37125201710"
              className="flex items-center space-x-2 text-sm font-medium"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>+371 25 201 710</span>
            </a>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/teg.auto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Transportaekspertugrupa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Separator />

          {/* Business Hours */}
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">{t('businessHours')}</p>
            <p>{t('hours')}</p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
