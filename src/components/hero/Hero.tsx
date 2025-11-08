import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CoverageBadge } from './CoverageBadge';
import { ElectricalParticles } from './ElectricalParticles';
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
            'text-foreground dark:text-white',
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
          'text-foreground dark:text-white',
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
        {/* Theme-aware animated overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient overlay - using theme colors for proper contrast */}
          <div
            className={cn(
              'absolute inset-0 transition-colors duration-500',
              'bg-gradient-to-br from-foreground/40 via-foreground/45 to-foreground/40',
              'dark:from-background/90 dark:via-background/85 dark:to-background/90',
            )}
          />
          {/* Animated gradient overlay - subtle primary color in light mode */}
          <div
            className={cn(
              'absolute inset-0 animate-gradient-shift',
              'opacity-20 dark:opacity-30',
              'bg-gradient-to-br from-primary/12 via-primary/8 to-primary/12',
              'dark:from-primary/22.5 dark:via-primary/15 dark:to-primary/22.5',
            )}
          />
          {/* Shimmer effect - subtle light shimmer in light mode */}
          <div
            className={cn(
              'absolute inset-0 animate-shimmer',
              'bg-gradient-to-r from-transparent via-primary/4 to-transparent',
              'dark:via-white/3.75',
            )}
          />
          {/* Electrical particle effects */}
          <ElectricalParticles className="absolute inset-0" />
          {/* Additional subtle color accent - chart colors for vibrancy in light mode */}
          <div
            className={cn(
              'absolute inset-0 animate-gradient-shift',
              'opacity-10',
              'bg-gradient-to-tl from-chart-2/8 via-transparent to-chart-4/6',
              'dark:hidden',
            )}
            style={{
              animationDuration: '20s',
              animationDirection: 'reverse',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
          {renderTitle()}

          {subtitle && (
            <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/90 sm:text-xl dark:text-gray-200">
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
      {/* Theme-aware animated overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient overlay - using theme colors for proper contrast */}
        <div
          className={cn(
            'absolute inset-0 transition-colors duration-500',
            'bg-gradient-to-br from-foreground/40 via-foreground/45 to-foreground/40',
            'dark:from-background/90 dark:via-background/85 dark:to-background/90',
          )}
        />
        {/* Animated gradient overlay - subtle primary color in light mode */}
        <div
          className={cn(
            'absolute inset-0 animate-gradient-shift',
            'opacity-20 dark:opacity-30',
            'bg-gradient-to-br from-primary/12 via-primary/8 to-primary/12',
            'dark:from-primary/22.5 dark:via-primary/15 dark:to-primary/22.5',
          )}
        />
        {/* Shimmer effect - subtle light shimmer in light mode */}
        <div
          className={cn(
            'absolute inset-0 animate-shimmer',
            'bg-gradient-to-r from-transparent via-primary/4 to-transparent',
            'dark:via-white/3.75',
          )}
        />
        {/* Electrical particle effects */}
        <ElectricalParticles className="absolute inset-0" />
        {/* Additional subtle color accent - chart colors for vibrancy in light mode */}
        <div
          className={cn(
            'absolute inset-0 animate-gradient-shift',
            'opacity-10',
            'bg-gradient-to-tl from-chart-2/8 via-transparent to-chart-4/6',
            'dark:hidden',
          )}
          style={{
            animationDuration: '20s',
            animationDirection: 'reverse',
          }}
        />
      </div>

      {/* Content - Split Layout */}
      <div className="relative z-10 container mx-auto px-4 py-[114px] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:gap-4">
          {/* Left Column - Main Content (centered column) */}
          <div className="relative mx-auto flex max-w-2xl flex-col items-center justify-center lg:mx-0 lg:max-w-none lg:items-start">
            {/* Eyebrow Badge */}
            {eyebrow && <div className="mb-6"><HeroEyebrow text={eyebrow.text} showStar={eyebrow.showStar} /></div>}

            {/* Title with Highlight */}
            <div className="mb-8 w-full text-center lg:text-left">
              {renderTitle()}
            </div>

            {/* Subtitle */}
            {subtitle && (
              <p className="mb-10 w-full max-w-[70%] text-center text-lg text-foreground/90 sm:text-xl lg:text-left dark:text-gray-200">
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
