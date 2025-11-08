'use client';

import type { MouseEvent } from 'react';
import Image from 'next/image';
import { useRef, useState } from 'react';
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
 * HeroMediaCard - Option 2: Magnetic Cursor + Shimmer Effect
 *
 * Features:
 * - Card slightly follows cursor (magnetic effect)
 * - Shimmer/shine sweep animation on hover
 * - Image zoom on hover (subtle)
 * - Glow pulse animation
 * - Border gradient rotation
 */
export function HeroMediaCard({ logo, image, className = '' }: HeroMediaCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) {
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
        'relative flex h-full min-h-[300px] items-center justify-center rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/20',
        'transition-all duration-500 ease-out',
        'hover:bg-white/15 hover:backdrop-blur-lg',
        'will-change-transform',
        className,
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Rotating gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-60"
        style={{
          background: 'conic-gradient(from 0deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1), rgba(255,255,255,0.4))',
          animation: 'rotate-border 8s linear infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Shimmer effect */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Pulsing glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{
          boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
          animation: 'pulse-glow 2s ease-in-out infinite',
        }}
      />

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
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
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
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
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
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}
      </style>
    </div>
  );
}
