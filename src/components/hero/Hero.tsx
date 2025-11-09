import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CoverageBadge } from './CoverageBadge';
import { HeroEyebrow } from './HeroEyebrow';
import { HeroMediaCard } from './HeroMediaCard';
import { HeroStatsGrid } from './HeroStatsGrid';
import { PhoneCTA } from './PhoneCTA';
import { RoadsideAssistanceCTA } from './RoadsideAssistanceCTA';
import { TestimonialsSection } from './TestimonialsSection';

type Testimonial = {
  quote: string;
  author: string;
  rating: number;
};

type StatItem = {
  value: string;
  label: string;
  icon?: LucideIcon;
};

type HeroProps = {
  title: string;
  subtitle?: string;
  // New: Split layout props
  eyebrow?: {
    text: string;
    showStar?: boolean;
  };
  highlightText?: string; // Text portion to highlight in title (e.g., "Wellness Journey")
  stats?: StatItem[]; // Statistics grid (e.g., "25+ Locations", "15+ States")
  mediaCard?: {
    logo?: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
    image?: {
      src: string;
      alt: string;
    };
  };
  layout?: 'centered' | 'split'; // Layout mode: centered (old) or split (new)
  // Existing props
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
  roadsideAssistance?: {
    phone: {
      display: string;
      href: string;
    };
    locale?: 'lv' | 'en' | 'ru';
  };
};

export function Hero({
  title,
  subtitle,
  eyebrow,
  highlightText,
  stats,
  mediaCard,
  layout = 'centered',
  primaryCta,
  secondaryCta,
  backgroundImage = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&q=80',
  className = '',
  titleUppercase = false,
  testimonials,
  coverageBadge,
  phoneNumber,
  roadsideAssistance,
}: HeroProps) {
  const hasSocialProof = testimonials || coverageBadge || phoneNumber;
  const isSplitLayout = layout === 'split';
  const hasHighlight = highlightText && title.includes(highlightText);

  // Split title if highlight text is provided
  const renderTitle = () => {
    if (!hasHighlight) {
      return (
        <h1
          className={cn(
            'text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl',
            'text-foreground',
            'drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]',
            'dark:text-white',
            'dark:drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)]',
            'dark:[text-shadow:0_0_20px_rgba(255,255,255,0.3)]',
            titleUppercase && 'uppercase',
            isSplitLayout && 'text-left',
          )}
        >
          {title}
        </h1>
      );
    }

    // Split title and highlight the specified portion
    const parts = title.split(highlightText);
    return (
      <h1
        className={cn(
          'mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl',
          'text-foreground',
          'drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]',
          'dark:text-white',
          'dark:drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)]',
          'dark:[text-shadow:0_0_20px_rgba(255,255,255,0.3)]',
          titleUppercase && 'uppercase',
          isSplitLayout && 'text-left',
        )}
      >
        {parts[0]}
        <span className="text-primary">{highlightText}</span>
        {parts[1]}
      </h1>
    );
  };

  // Centered layout (original)
  if (!isSplitLayout) {
    return (
      <section
        className={cn(
          'relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-cover bg-center',
          className,
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="py-8">
              {renderTitle()}
            </div>

            {subtitle && (
              <p className="mt-8 mb-8 text-xl font-medium tracking-wide text-foreground/95 sm:text-2xl md:text-3xl dark:text-gray-100">
                {subtitle}
              </p>
            )}
          </div>

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
              {coverageBadge && <CoverageBadge text={coverageBadge.text} />}

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
            <div className="mb-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              {primaryCta && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}

              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-foreground/20 bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90 sm:w-auto dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}

          {/* Roadside Assistance CTA - Prominent placement */}
          {roadsideAssistance && (
            <div className="mx-auto mt-6 max-w-md">
              <RoadsideAssistanceCTA
                phone={roadsideAssistance.phone}
                locale={roadsideAssistance.locale}
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  // Split layout (new modern design)
  return (
    <section
      className={cn(
        'relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-cover bg-center',
        className,
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >

      {/* Content - Split Layout */}
      <div className="relative z-10 container mx-auto px-4 py-[114px] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:gap-4">
          {/* Left Column - Main Content (centered column) */}
          <div className="relative mx-auto flex max-w-2xl flex-col items-center justify-center lg:mx-0 lg:max-w-none lg:items-start">
            {/* Eyebrow Badge */}
            {eyebrow && <div className="mb-6"><HeroEyebrow text={eyebrow.text} showStar={eyebrow.showStar} /></div>}

            {/* Title with Highlight */}
            <div className="mb-12 w-full py-8 text-center lg:text-left">
              {renderTitle()}
            </div>

            {/* Subtitle */}
            {subtitle && (
              <p className="mb-10 w-full max-w-[70%] text-center text-xl font-medium tracking-wide text-foreground/95 sm:text-2xl md:text-3xl lg:text-left dark:text-gray-100">
                {subtitle}
              </p>
            )}

            {/* Stats Grid */}
            {stats && stats.length > 0 && (
              <div className="mb-10">
                <HeroStatsGrid stats={stats} />
              </div>
            )}

            {/* Phone Number CTA */}
            {phoneNumber && (
              <div className="mb-6">
                <PhoneCTA
                  phone={{
                    display: phoneNumber.display,
                    href: phoneNumber.href,
                  }}
                  whatsapp={phoneNumber.whatsapp}
                  className="justify-start"
                />
              </div>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta || roadsideAssistance) && (
              <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                {primaryCta && (
                  <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                    <Link href={primaryCta.href}>
                      {primaryCta.text}
                      <span className="ml-2">→</span>
                    </Link>
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-white bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                  </Button>
                )}

                {roadsideAssistance && (
                  <RoadsideAssistanceCTA
                    phone={roadsideAssistance.phone}
                    locale={roadsideAssistance.locale}
                    className="w-full sm:w-auto"
                  />
                )}
              </div>
            )}

          </div>

          {/* Right Column - Media Card (square aspect ratio) */}
          {mediaCard && (
            <div className="flex w-full items-center justify-center">
              <HeroMediaCard
                logo={mediaCard.logo}
                image={mediaCard.image}
                className="aspect-square w-full max-w-[500px]"
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
