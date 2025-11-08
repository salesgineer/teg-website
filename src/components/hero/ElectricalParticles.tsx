'use client';

import Particles from '@tsparticles/react';

type ElectricalParticlesProps = {
  className?: string;
};

/**
 * ElectricalParticles - Creates electrical/spark particle effects using tsParticles
 * Designed to look like electrical energy with connecting arcs and spark particles
 */
export function ElectricalParticles({ className = '' }: ElectricalParticlesProps) {
  return (
    <Particles
      id="electrical-particles"
      className={className}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: {
              value: 'hsl(var(--primary))',
            },
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: false,
            },
            shadow: {
              enable: true,
              color: {
                value: 'hsl(var(--primary))',
              },
              blur: 3,
            },
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 2 },
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce',
            },
            attract: {
              enable: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
