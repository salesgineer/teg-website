import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features?: string[];
  ctaText: string;
  ctaHref: string;
  variant?: 'default' | 'featured';
  backgroundImage?: string;
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
}: ServiceCardProps) {
  const hasBackgroundImage = !!backgroundImage;

  return (
    <Card
      className={`relative flex h-full flex-col transition-all hover:shadow-lg ${variant === 'featured' ? 'border-2 border-primary shadow-xl' : 'border-border'} ${hasBackgroundImage ? 'relative overflow-hidden' : 'bg-card'}`}
      style={hasBackgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        : undefined}
    >
      {/* Dark overlay for readability when photo background is used */}
      {hasBackgroundImage && (
        <div className={`absolute inset-0 ${variant === 'featured' ? 'bg-gradient-to-b from-black/75 via-black/65 to-black/75' : 'bg-gradient-to-b from-black/80 via-black/70 to-black/80'}`} />
      )}

      {/* Most Popular Badge - positioned inside card header */}
      {variant === 'featured' && (
        <div className="absolute top-3 right-3 z-20">
          <Badge className="flex items-center gap-1.5 bg-primary px-3 py-1 text-primary-foreground shadow-lg">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-semibold">POPULĀRĀKAIS</span>
          </Badge>
        </div>
      )}

      <CardHeader className={`${hasBackgroundImage ? 'relative z-10' : ''} pb-4`}>
        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${hasBackgroundImage ? 'bg-white/20 backdrop-blur-sm' : 'bg-primary/10'}`}>
          <Icon className={`h-7 w-7 ${hasBackgroundImage ? 'text-white' : 'text-primary'}`} />
        </div>
        <CardTitle className={`text-2xl font-bold ${hasBackgroundImage ? 'text-white' : ''}`}>{title}</CardTitle>
        <CardDescription className={`mt-2 ${hasBackgroundImage ? 'text-gray-200' : 'text-muted-foreground'}`}>{description}</CardDescription>
      </CardHeader>

      <CardContent className={`flex-grow space-y-4 ${hasBackgroundImage ? 'relative z-10' : ''}`}>
        {features && features.length > 0 && (
          <ul className="space-y-3 text-sm">
            {features.map(feature => (
              <li key={feature} className="flex items-start gap-2">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${hasBackgroundImage ? 'text-white' : 'text-primary'}`} />
                <span className={hasBackgroundImage ? 'text-gray-200' : 'text-muted-foreground'}>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className={`flex flex-col items-start gap-4 pt-6 ${hasBackgroundImage ? 'relative z-10' : ''}`}>
        <Badge variant="secondary" className={`px-3 py-1 text-base font-semibold ${hasBackgroundImage ? 'border-white/20 bg-white/20 text-white backdrop-blur-sm' : 'bg-muted'}`}>
          {price}
        </Badge>
        <Button asChild className="w-full" size="lg">
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
