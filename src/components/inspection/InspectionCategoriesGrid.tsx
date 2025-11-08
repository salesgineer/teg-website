import type { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type InspectionCategory = {
  icon?: ReactNode;
  title: string;
  description?: string;
  items: string[];
};

type InspectionCategoriesGridProps = {
  categories: InspectionCategory[];
  headline?: string;
  ctaText?: string;
  ctaHref?: string;
};

export function InspectionCategoriesGrid({
  categories,
  headline,
  ctaText,
  ctaHref = '/kontakti',
}: InspectionCategoriesGridProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            {headline}
          </h2>
        )}

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Card key={`category-${category.title}-${index}`} className="border-border bg-card">
              <CardHeader>
                {category.icon && (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                )}
                <CardTitle className="text-xl">{category.title}</CardTitle>
                {category.description && (
                  <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={`item-${item.substring(0, 20)}-${itemIndex}`} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {ctaText && (
          <div className="text-center">
            <Button asChild size="lg">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
