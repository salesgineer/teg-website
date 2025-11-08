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
}: ServiceCardProps) {
  return (
    <Card className={`flex h-full flex-col ${variant === 'featured' ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {features && features.length > 0 && (
          <ul className="space-y-2 text-sm">
            {features.map(feature => (
              <li key={feature} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="flex flex-col items-start space-y-4">
        <Badge variant="secondary" className="text-lg font-semibold">
          {price}
        </Badge>
        <Button asChild className="w-full">
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
