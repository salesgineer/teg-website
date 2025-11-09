import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type ValuePropositionItem = {
  icon?: ReactNode;
  title: string;
  description: string;
};

type ValuePropositionGridProps = {
  items: ValuePropositionItem[];
  headline?: string;
  subheadline?: string;
};

export function ValuePropositionGrid({
  items,
  headline,
  subheadline,
}: ValuePropositionGridProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            {headline}
          </h2>
        )}
        {subheadline && (
          <p className="mb-12 text-center text-lg text-muted-foreground">
            {subheadline}
          </p>
        )}

        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {items.map((item, index) => (
              <div key={`prop-${item.title}-${index}`} className="relative">
                {/* Step number badge */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </div>

                {/* Arrow connector (hidden on mobile, shown between items on desktop) */}
                {index < items.length - 1 && (
                  <div className="absolute top-6 right-0 hidden h-0.5 w-full translate-x-1/2 bg-primary/20 md:block" />
                )}
                {index < items.length - 1 && (
                  <div className="absolute top-6 right-0 hidden translate-x-1/2 md:block">
                    <ArrowRight className="h-6 w-6 translate-x-1/2 text-primary/40" />
                  </div>
                )}

                <Card className="relative border-border bg-card shadow-sm transition-all hover:shadow-md">
                  <CardContent className="pt-6 text-center">
                    {item.icon && (
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                    )}
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/80 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
