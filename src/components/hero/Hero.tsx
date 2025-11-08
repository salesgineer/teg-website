import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CoverageBadge } from './CoverageBadge';
import { PhoneCTA } from './PhoneCTA';
import { TestimonialsSection } from './TestimonialsSection';

type Testimonial = {
  quote: string;
  author: string;
  rating: number;
};

type HeroProps = {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
  overlayOpacity?: 'light' | 'dark';
  titleUppercase?: boolean;
  // Option B: Social Proof elements
  testimonials?: {
    overallRating: number;
    reviewCount: number;
    featuredTestimonial: Testimonial;
  };
  coverageBadge?: {
    text: string;
  };
  phoneNumber?: {
    display: string;
    href: string;
    whatsapp?: {
      href: string;
      text?: string;
    };
  };
};

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage = '/images/hero-car.jpg',
  className = '',
  overlayOpacity = 'light',
  titleUppercase = false,
  testimonials,
  coverageBadge,
  phoneNumber,
}: HeroProps) {
  const hasSocialProof = testimonials || coverageBadge || phoneNumber;

  return (
    <section
      className={`relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity === 'dark' ? 'bg-black/70' : 'bg-black/60'}`} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className={`mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl ${titleUppercase ? 'uppercase' : ''}`}>
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
            {subtitle}
          </p>
        )}

        {/* Option B: Social Proof Elements */}
        {hasSocialProof && (
          <div className="mb-8 space-y-6">
            {/* Testimonials Section */}
            {testimonials && (
              <TestimonialsSection
                overallRating={testimonials.overallRating}
                reviewCount={testimonials.reviewCount}
                featuredTestimonial={testimonials.featuredTestimonial}
              />
            )}

            {/* Coverage Badge */}
            {coverageBadge && (
              <CoverageBadge text={coverageBadge.text} />
            )}

            {/* Phone Number CTA */}
            {phoneNumber && (
              <PhoneCTA
                phone={{
                  display: phoneNumber.display,
                  href: phoneNumber.href,
                }}
                whatsapp={phoneNumber.whatsapp}
              />
            )}
          </div>
        )}

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            {primaryCta && (
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            )}

            {secondaryCta && (
              <Button asChild size="lg" variant="outline" className="w-full border-white bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
