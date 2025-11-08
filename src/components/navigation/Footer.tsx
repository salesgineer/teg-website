import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

// TikTok icon (Lucide doesn't have TikTok, using custom SVG)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">TEG</h3>
            <p className="text-sm text-muted-foreground">
              {t('description')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('contact')}</h3>
            <div className="space-y-2">
              <a
                href="tel:+37125201710"
                className="flex items-center space-x-2 text-sm transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>+371 25 201 710</span>
              </a>
              <a
                href="mailto:info@teg.lv"
                className="flex items-center space-x-2 text-sm transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>info@teg.lv</span>
              </a>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">{t('businessHours')}</p>
                <p>{t('hours')}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('followUs')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/teg.auto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@teg.auto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <TikTokIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/Transportaekspertugrupa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            ©
            {' '}
            {currentYear}
            {' '}
            TEG.
            {' '}
            {t('rights')}
          </p>
          <nav className="flex space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t('privacy')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
