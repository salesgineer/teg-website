'use client';

import type { MouseEvent } from 'react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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
 * HeroMediaCard - Magnetic Cursor + Shimmer Effect
 *
 * Premium automotive-inspired interactive card with:
 * - Magnetic cursor following effect
 * - Shimmer/shine sweep animation on hover
 * - Subtle image zoom on hover
 * - Rotating gradient border
 * - Pulsing glow effect
 *
 * Designed for professional automotive brand presentation.
 */
export function HeroMediaCard({ logo, image, className = '' }: HeroMediaCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Magnetic effect: card follows cursor with dampening (30% of distance)
    const magneticX = mouseX * 0.3;
    const magneticY = mouseY * 0.3;

    setPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={cn(
        'relative flex items-center justify-center rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/20',
        'transition-all duration-500 ease-out',
        'hover:bg-white/15 hover:backdrop-blur-lg',
        'will-change-transform',
        className,
      )}
      style={{
        transform: prefersReducedMotion
          ? 'none'
          : `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Rotating gradient border */}
      {!prefersReducedMotion && (
        <div
          className="animate-rotate-border absolute inset-0 rounded-2xl opacity-60"
          style={{
            background: 'conic-gradient(from 0deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1), rgba(255,255,255,0.4))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1px',
          }}
        />
      )}

      {/* Shimmer effect */}
      {isHovered && !prefersReducedMotion && (
        <div
          className="animate-shimmer-sweep pointer-events-none absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
          }}
        />
      )}

      {/* Pulsing glow */}
      {!prefersReducedMotion && (
        <div
          className="animate-pulse-glow-card absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 hover:opacity-100"
          style={{
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
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
          className="absolute inset-0 overflow-hidden rounded-2xl transition-transform duration-500 ease-out"
          style={{
            transform: isHovered && !prefersReducedMotion ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            loading="eager"
            priority
          />
        </div>
      )}

      {!logo && !image && (
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl transition-transform duration-500 ease-out"
          style={{
            transform: isHovered && !prefersReducedMotion ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1585062168782-0459bfd34a0c?w=800&h=600&fit=crop&q=80"
            alt="Red BMW E30 car inspection in garage - automotive inspection service"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
    </div>
  );
}
