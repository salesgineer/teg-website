import type { LucideIcon } from 'lucide-react';
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
      className={`flex h-full flex-col ${variant === 'featured' ? 'border-primary shadow-lg' : ''} ${hasBackgroundImage ? 'relative overflow-hidden' : ''}`}
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
        <div className="absolute inset-0 bg-black/70" />
      )}

      <CardHeader className={hasBackgroundImage ? 'relative z-10' : ''}>
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${hasBackgroundImage ? 'bg-white/20' : 'bg-primary/10'}`}>
          <Icon className={`h-6 w-6 ${hasBackgroundImage ? 'text-white' : 'text-primary'}`} />
        </div>
        <CardTitle className={`text-xl ${hasBackgroundImage ? 'text-white' : ''}`}>{title}</CardTitle>
        <CardDescription className={hasBackgroundImage ? 'text-gray-200' : ''}>{description}</CardDescription>
      </CardHeader>

      <CardContent className={`flex-grow space-y-4 ${hasBackgroundImage ? 'relative z-10' : ''}`}>
        {features && features.length > 0 && (
          <ul className="space-y-2 text-sm">
            {features.map(feature => (
              <li key={feature} className="flex items-start">
                <span className={`mr-2 ${hasBackgroundImage ? 'text-white' : 'text-primary'}`}>•</span>
                <span className={hasBackgroundImage ? 'text-gray-200' : 'text-muted-foreground'}>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className={`flex flex-col items-start space-y-4 ${hasBackgroundImage ? 'relative z-10' : ''}`}>
        <Badge variant="secondary" className={`text-lg font-semibold ${hasBackgroundImage ? 'bg-white/20 text-white' : ''}`}>
          {price}
        </Badge>
        <Button asChild className="w-full">
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
