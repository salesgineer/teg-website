import type { ReactNode } from 'react';
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
    <section className="bg-white py-16 md:py-24">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Card key={`prop-${item.title}-${index}`} className="border-0 shadow-none">
              <CardContent className="pt-6 text-center">
                {item.icon && (
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center">
                    {item.icon}
                  </div>
                )}
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
