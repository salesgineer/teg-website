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
 * HeroMediaCard - Option 1: 3D Tilt + Parallax Image
 *
 * Features:
 * - 3D tilt effect on mouse move
 * - Image parallax (moves opposite to tilt)
 * - Subtle scale on hover
 * - Animated gradient border
 * - Smooth transitions
 */
export function HeroMediaCard({ logo, image, className = '' }: HeroMediaCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate tilt (max 15 degrees)
    const rotateX = (mouseY / rect.height) * -15;
    const rotateY = (mouseX / rect.width) * 15;

    // Calculate image parallax (opposite direction, smaller movement)
    const imageX = (mouseX / rect.width) * -20;
    const imageY = (mouseY / rect.height) * -20;

    setTransform({ rotateX, rotateY, scale: 1.02 });
    setImageOffset({ x: imageX, y: imageY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setImageOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative flex h-full min-h-[300px] items-center justify-center rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/20',
        'transition-all duration-300 ease-out',
        'hover:bg-white/15 hover:backdrop-blur-lg',
        'will-change-transform',
        className,
      )}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-50"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
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
          className="relative h-full w-full overflow-hidden rounded-lg"
          style={{
            transform: `translate(${imageOffset.x}px, ${imageOffset.y}px)`,
            transition: 'transform 0.1s ease-out',
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
          className="relative h-full w-full overflow-hidden rounded-lg"
          style={{
            transform: `translate(${imageOffset.x}px, ${imageOffset.y}px)`,
            transition: 'transform 0.1s ease-out',
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
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}
      </style>
    </div>
  );
}
