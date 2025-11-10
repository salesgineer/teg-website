'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  email: z.string().email('Lūdzu, ievadiet derīgu e-pasta adresi'),
  name: z.string().min(2, 'Vārds ir obligāts'),
  message: z.string().min(10, 'Lūdzu, ievadiet savu jautājumu'),
});

type FormData = z.infer<typeof formSchema>;

type DarkFooterWithFormProps = {
  headline?: string;
  introText?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
};

export function DarkFooterWithForm({
  headline = 'Sazin atsaities',
  introText = 'Jautājiet mums par visu izmantodams šīs formas!',
  contactInfo,
}: DarkFooterWithFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number; endX: number; endY: number; color: string }>>([]);
  const [explosions, setExplosions] = useState<Array<{ id: number; x: number; y: number; endX: number; endY: number; delay: number; rotation: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const explosionIdRef = useRef(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Ziņojums veiksmīgi nosūtīts!');
      form.reset();
    } catch (error) {
      toast.error('Radās kļūda. Lūdzu, mēģiniet vēlreiz.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleClick = () => {
    if (!containerRef.current) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Use viewport dimensions for full screen spread
    const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.8;

    // Create fireworks particles
    const newFireworks: Array<{ id: number; x: number; y: number; endX: number; endY: number; color: string }> = [];
    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50;
      const distance = maxDistance;
      const endX = centerX + Math.cos(angle) * distance;
      const endY = centerY + Math.sin(angle) * distance;
      const hue = (i * 7.2) % 360;
      newFireworks.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        endX,
        endY,
        color: `hsl(${hue}, 100%, 50%)`,
      });
    }
    setFireworks(newFireworks);

    // Create text explosions
    const newExplosions: Array<{ id: number; x: number; y: number; endX: number; endY: number; delay: number; rotation: number }> = [];
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const distance = maxDistance;
      const endX = centerX + Math.cos(angle) * distance;
      const endY = centerY + Math.sin(angle) * distance;
      newExplosions.push({
        id: explosionIdRef.current++,
        x: centerX,
        y: centerY,
        endX,
        endY,
        delay: i * 30,
        rotation: (angle * 180) / Math.PI,
      });
    }
    setExplosions(newExplosions);

    // Clean up after animation
    setTimeout(() => {
      setFireworks([]);
      setExplosions([]);
    }, 3000);
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form Column */}
          <div>
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">{headline}</h2>
            <p className="mb-8 text-white/70">{introText}</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">E-pasts</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="jusu.epasts@example.com"
                          className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Vārds</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jūsu vārds"
                          className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Jautājums vai vēlies</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Jūsu jautājums..."
                          rows={5}
                          className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? 'Nosūta...' : 'Nosūtīt'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Illustration/Info Column */}
          <div
            ref={containerRef}
            className="group relative flex cursor-pointer items-center justify-center overflow-hidden"
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick();
              }
            }}
            role="button"
            tabIndex={0}
          >
            {/* Fireworks particles - fixed positioning for full screen */}
            {fireworks.map((firework) => {
              const deltaX = firework.endX - firework.x;
              const deltaY = firework.endY - firework.y;
              return (
                <div
                  key={firework.id}
                  className="pointer-events-none fixed z-[9999]"
                  style={{
                    'left': `${firework.x}px`,
                    'top': `${firework.y}px`,
                    'width': '10px',
                    'height': '10px',
                    'borderRadius': '50%',
                    'background': firework.color,
                    'boxShadow': `0 0 15px ${firework.color}, 0 0 30px ${firework.color}`,
                    'animation': `firework-explode 1.5s ease-out forwards`,
                    '--end-x': `${deltaX}px`,
                    '--end-y': `${deltaY}px`,
                  } as React.CSSProperties & { '--end-x': string; '--end-y': string }}
                />
              );
            })}

            {/* Text explosions - fixed positioning for full screen */}
            {explosions.map((explosion) => {
              const deltaX = explosion.endX - explosion.x;
              const deltaY = explosion.endY - explosion.y;
              return (
                <div
                  key={explosion.id}
                  className="pointer-events-none fixed z-[9999]"
                  style={{
                    'left': `${explosion.x}px`,
                    'top': `${explosion.y}px`,
                    'fontFamily': 'monospace',
                    'fontSize': '2rem',
                    'fontWeight': '900',
                    'background': 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
                    'backgroundSize': '300% 300%',
                    'WebkitBackgroundClip': 'text',
                    'WebkitTextFillColor': 'transparent',
                    'backgroundClip': 'text',
                    'animation': `gradient-shift 2s ease infinite, text-blast 2.5s ease-out ${explosion.delay}ms forwards`,
                    'textShadow': '0 0 30px rgba(255,0,255,0.9), 0 0 60px rgba(0,255,255,0.9)',
                    '--end-x': `${deltaX}px`,
                    '--end-y': `${deltaY}px`,
                    '--rotation': `${explosion.rotation}deg`,
                  } as React.CSSProperties & { '--end-x': string; '--end-y': string; '--rotation': string }}
                >
                  CHUPAPI MUNANYU! 🎭✨
                </div>
              );
            })}

            <div className="text-center lg:text-left">
              <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-primary/20 transition-all duration-300 group-hover:scale-110 lg:mx-0">
                {/* Placeholder for brand illustration */}
                <div className="h-32 w-32 rounded-full bg-primary transition-all duration-300 group-hover:rotate-12" />
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  className="rounded-lg border-2 border-primary bg-primary px-6 py-3 text-lg font-bold text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                  }}
                >
                  CLICK ME!
                </button>
              </div>
              <p className="relative text-lg text-white/70 transition-all duration-300">
                <span className="block transition-opacity duration-300 group-hover:opacity-0">Mēs ar prieku atbildēsim</span>
                <span
                  className="absolute top-0 left-0 block w-full opacity-0 transition-all duration-500 group-hover:opacity-100"
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 2s ease infinite',
                    textShadow: '0 0 20px rgba(255,0,255,0.8), 0 0 40px rgba(0,255,255,0.8)',
                    transform: 'scale(1.2)',
                    letterSpacing: '0.1em',
                  }}
                >
                  CHUPAPI MUNANYU! 🎭✨
                </span>
              </p>
            </div>

          </div>
        </div>

        {/* Contact Info Section */}
        {contactInfo && (
          <>
            <Separator className="my-12 bg-white/10" />
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
              {contactInfo.phone && (
                <div>
                  <h3 className="mb-2 font-semibold">Tālrunis</h3>
                  <p className="text-white/70">{contactInfo.phone}</p>
                </div>
              )}
              {contactInfo.email && (
                <div>
                  <h3 className="mb-2 font-semibold">E-pasts</h3>
                  <p className="text-white/70">{contactInfo.email}</p>
                </div>
              )}
              {contactInfo.address && (
                <div>
                  <h3 className="mb-2 font-semibold">Adrese</h3>
                  <p className="text-white/70">{contactInfo.address}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
