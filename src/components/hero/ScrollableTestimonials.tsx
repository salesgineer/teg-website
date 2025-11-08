'use client';

import type { CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { CheckCircle2, Star } from 'lucide-react';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,

  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating: number;
  location?: string;
};

type ScrollableTestimonialsProps = {
  testimonials: Testimonial[];
  className?: string;
};

/**
 * ScrollableTestimonials - Interactive carousel testimonials component
 * Displays multiple testimonials with navigation buttons and auto-play
 */
export function ScrollableTestimonials({
  testimonials,
  className = '',
}: ScrollableTestimonialsProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    }),
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          'h-4 w-4',
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-muted text-muted-foreground/30',
        )}
      />
    ));
  };

  return (
    <div className={cn('w-full', className)}>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
        }}
        className="w-full"
        orientation="horizontal"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map(testimonial => (
            <CarouselItem key={testimonial.id} className="min-w-[320px] basis-full pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex h-full flex-col border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80">
                  <CardContent className="flex flex-grow flex-col p-6">
                    {/* Rating Stars and Google Verified Badge */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      {/* Google Verified Badge */}
                      <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-2 py-1 dark:bg-blue-950/30">
                        <svg
                          className="h-4 w-4 text-blue-600 dark:text-blue-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="mb-4 flex-grow text-sm leading-relaxed text-foreground/90">
                      "
                      {testimonial.quote}
                      "
                    </p>

                    {/* Author Info */}
                    <div className="mt-auto border-t border-border/30 pt-4">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      {testimonial.location && (
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 border-border/50 bg-background/80 backdrop-blur-sm hover:bg-background md:left-0" />
        <CarouselNext className="right-2 border-border/50 bg-background/80 backdrop-blur-sm hover:bg-background md:right-0" />
      </Carousel>

      {/* Slide Indicator */}
      {count > 0 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                index + 1 === current
                  ? 'w-8 bg-primary'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
