import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Hero } from '@/components/hero/Hero';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/button';
import { SERVICES_PAGE_COPY } from '@/lib/constants/copy';

export default function MobileRoadServicePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero/mobile-service.jpg"
        overlayOpacity="dark"
        title={SERVICES_PAGE_COPY.hero.title}
        subtitle={SERVICES_PAGE_COPY.hero.subtitle}
        primaryCta={{
          text: 'Pasūtīt pārbaudi',
          href: '/kontakti',
        }}
      />

      {/* Services List Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Services Grid */}
            <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              {SERVICES_PAGE_COPY.services.map((service, index) => (
                <div key={`service-${index}`} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section */}
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm text-muted-foreground">
                {SERVICES_PAGE_COPY.pricing.prefix}
              </p>
              <p className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                {SERVICES_PAGE_COPY.pricing.full}
              </p>
              <p className="mx-auto mb-2 max-w-2xl text-sm text-muted-foreground">
                {SERVICES_PAGE_COPY.disclaimer.main}
              </p>
              <p className="text-sm text-muted-foreground">
                {SERVICES_PAGE_COPY.disclaimer.tax}
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/kontakti">Pasūtīt pārbaudi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Footer */}
      <Footer />
    </main>
  );
}
