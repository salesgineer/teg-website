import type { ComponentType, SVGProps } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
  strokeWidth?: number | string;
};

type ServiceCardProps = {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  price: string;
  features?: string[];
  ctaText: string;
  ctaHref: string;
  variant?: 'default' | 'featured';
  backgroundImage?: string;
  showEuropeBadge?: boolean;
  showLatviaBadge?: boolean;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  features,
  ctaText,
  ctaHref,
  variant = 'default',
  backgroundImage,
  showEuropeBadge = false,
  showLatviaBadge = false,
}: ServiceCardProps) {
  const hasBackgroundImage = !!backgroundImage;

  return (
    <Card
      className={`relative flex h-full flex-col transition-all hover:shadow-md ${variant === 'featured' ? 'border-2 border-primary shadow-md' : ''} ${hasBackgroundImage ? 'relative overflow-hidden' : ''}`}
      style={hasBackgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        : undefined}
    >
      {/* Subtle gradient overlay for text readability - very light to preserve image colors */}
      {hasBackgroundImage && (
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      )}

      {/* Most Popular Badge - positioned inside card header */}
      {variant === 'featured' && (
        <div className="absolute top-3 right-3 z-20">
          <Badge className="flex h-7 items-center gap-1.5 bg-primary px-3 text-primary-foreground shadow-lg">
            <StarIcon className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
            <span className="text-xs leading-none font-semibold">POPULĀRĀKAIS</span>
          </Badge>
        </div>
      )}

      {/* Europe Badge - positioned top right (or top left if featured badge is present) */}
      {showEuropeBadge && (
        <div className={`absolute top-3 z-20 ${variant === 'featured' ? 'left-3' : 'right-3'}`}>
          <Badge className="flex h-7 items-center gap-1.5 border-2 border-blue-600/30 bg-gradient-to-r from-blue-600 to-blue-700 px-3 text-white shadow-lg ring-2 ring-blue-500/20 backdrop-blur-sm">
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center text-sm leading-none" role="img" aria-label="European Union flag">
              🇪🇺
            </span>
            <span className="text-xs leading-none font-semibold whitespace-nowrap">Pieejams visā Eiropā</span>
          </Badge>
        </div>
      )}

      {/* Latvia Badge - positioned top right (or top left if featured badge is present) */}
      {showLatviaBadge && (
        <div className={`absolute top-3 z-20 ${variant === 'featured' || showEuropeBadge ? 'left-3' : 'right-3'}`}>
          <Badge className="flex h-7 items-center gap-1.5 border-2 border-red-800/30 bg-gradient-to-r from-red-800 to-red-900 px-3 text-white shadow-lg ring-2 ring-red-700/20 backdrop-blur-sm">
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center text-sm leading-none" role="img" aria-label="Latvian flag">
              🇱🇻
            </span>
            <span className="text-xs leading-none font-semibold whitespace-nowrap">Pieejams visā Latvijā</span>
          </Badge>
        </div>
      )}

      <CardHeader className={`pb-4 ${hasBackgroundImage ? 'relative z-10' : ''}`}>
        <div
          className={`group mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/20 transition-all duration-300 hover:scale-110 hover:from-primary/25 hover:to-primary/10 hover:shadow-lg hover:ring-primary/30 ${hasBackgroundImage ? 'bg-gray-200/10 ring-gray-200/30 backdrop-blur-sm' : ''}`}
        >
          <Icon
            className="h-10 w-10 text-primary transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <CardTitle className={`text-2xl font-bold ${hasBackgroundImage ? 'text-gray-100 [text-shadow:0_2px_8px_rgba(0,0,0,0.8),0_1px_4px_rgba(0,0,0,0.6)]' : ''}`}>{title}</CardTitle>
        <CardDescription className={`mt-2 ${hasBackgroundImage ? 'text-gray-200 [text-shadow:0_2px_6px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.6)]' : ''}`}>{description}</CardDescription>
      </CardHeader>

      <CardContent className={`flex-grow space-y-4 ${hasBackgroundImage ? 'relative z-10' : ''}`}>
        {features && features.length > 0 && (
          <ul className="space-y-3 text-sm">
            {features.map(feature => (
              <li key={feature} className="flex items-start gap-2">
                <CheckCircleIcon className={`mt-0.5 h-5 w-5 shrink-0 ${hasBackgroundImage ? 'text-primary [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.8))_brightness(1.2)]' : 'text-primary [filter:brightness(1.2)]'}`} style={hasBackgroundImage ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8)) brightness(1.2)' } : { filter: 'brightness(1.2)' }} strokeWidth={2.5} />
                <span
                  className={hasBackgroundImage ? 'text-gray-200 [text-shadow:0_2px_6px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.6)]' : ''}
                  style={!hasBackgroundImage ? { color: 'oklch(0.85 0 0)' } : undefined}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className={`flex flex-col items-center gap-4 pt-6 ${hasBackgroundImage ? 'relative z-10' : ''}`}>
        <Badge variant="secondary" className={`relative w-fit justify-center overflow-visible px-5 py-2.5 text-xl font-black tracking-wider uppercase ${hasBackgroundImage ? 'border-2 border-yellow-300/80 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-yellow-950 shadow-2xl ring-4 [box-shadow:0_0_20px_rgba(255,215,0,0.4),0_0_40px_rgba(255,215,0,0.2)] ring-yellow-400/60 backdrop-blur-sm [text-shadow:0_2px_4px_rgba(255,255,255,0.9),0_0_8px_rgba(255,215,0,0.5)]' : 'border-2 border-yellow-400 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-yellow-950 shadow-2xl ring-4 [box-shadow:0_0_20px_rgba(255,215,0,0.5),0_0_40px_rgba(255,215,0,0.3)] ring-yellow-400/50'}`}>
          <span className="relative z-10">{price}</span>
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent" />
          <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-yellow-300/50 via-yellow-400/30 to-yellow-300/50 blur-xl" style={{ animationDuration: '2s' }} />
        </Badge>
        <Button asChild className="w-full" size="lg">
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
