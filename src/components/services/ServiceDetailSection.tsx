import type { ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ServiceDetailSectionProps = {
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  title: string;
  description: string | ReactNode;
  benefits?: string[];
  pricing?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundColor?: 'white' | 'muted';
};

export function ServiceDetailSection({
  image,
  imageAlt,
  imagePosition,
  title,
  description,
  benefits,
  pricing,
  ctaText,
  ctaHref = '/kontakti',
  backgroundColor = 'white',
}: ServiceDetailSectionProps) {
  const bgClass = backgroundColor === 'muted' ? 'bg-muted' : 'bg-white';

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image Column */}
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-lg ${
              imagePosition === 'right' ? 'lg:order-last' : ''
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">{title}</h2>

            {typeof description === 'string'
              ? (
                  <div className="mb-6 whitespace-pre-line text-muted-foreground">
                    {description}
                  </div>
                )
              : (
                  <div className="mb-6">{description}</div>
                )}

            {benefits && benefits.length > 0 && (
              <ul className="mb-6 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={`benefit-${benefit.substring(0, 20)}-${index}`} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            {pricing && (
              <p className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                {pricing}
              </p>
            )}

            {ctaText && (
              <Button asChild size="lg">
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
