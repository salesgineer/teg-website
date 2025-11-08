'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type HeroMediaCardProps = {
  logo?: {
    src?: string;
    alt: string;
    width?: number;
    height?: number;
  };
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
};

/**
 * HeroMediaCard - Option 3: Scale & Glow + Image Zoom
 *
 * Features:
 * - Card scales up on hover (1.05x)
 * - Intense glow effect on hover
 * - Image zooms independently (1.1x)
 * - Shadow depth increases
 * - Border brightness animation
 */
export function HeroMediaCard({ logo, image, className = '' }: HeroMediaCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative flex h-full min-h-[300px] items-center justify-center rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/20',
        'transition-all duration-500 ease-out',
        'hover:bg-white/15 hover:backdrop-blur-lg',
        'will-change-transform',
        className,
      )}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered
          ? '0 20px 60px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)'
          : '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Animated bright border */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: isHovered
            ? 'linear-gradient(45deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2), rgba(255,255,255,0.6))'
            : 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
          backgroundSize: '200% 200%',
          animation: isHovered ? 'border-pulse 2s ease-in-out infinite' : 'none',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
          transition: 'opacity 0.5s ease-out',
        }}
      />

      {/* Intense glow overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
            animation: 'glow-pulse 1.5s ease-in-out infinite',
          }}
        />
      )}

      {logo && (
        <div className="relative z-10 flex items-center justify-center">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white/20">
            {logo.src
              ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width || 80}
                    height={logo.height || 80}
                    className="object-contain"
                  />
                )
              : (
                  <Image
                    src="https://images.unsplash.com/photo-1585062168782-0459bfd34a0c?w=400&h=400&fit=crop&q=80"
                    alt="Red BMW E30 car inspection in garage"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                )}
          </div>
        </div>
      )}

      {image && !logo && (
        <div
          className="relative h-full w-full overflow-hidden rounded-lg transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="eager"
            priority
          />
        </div>
      )}

      {!logo && !image && (
        <div
          className="relative h-full w-full overflow-hidden rounded-lg transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1585062168782-0459bfd34a0c?w=800&h=600&fit=crop&q=80"
            alt="Red BMW E30 car inspection in garage - automotive inspection service"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <style jsx>
        {`
        @keyframes border-pulse {
          0%, 100% { 
            background-position: 0% 50%;
            opacity: 0.6;
          }
          50% { 
            background-position: 100% 50%;
            opacity: 1;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}
      </style>
    </div>
  );
}
