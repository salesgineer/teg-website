import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FraudTactic = {
  icon?: ReactNode;
  title: string;
  description: string;
};

type AntiFraudSectionProps = {
  tactics: FraudTactic[];
  headline?: string;
};

export function AntiFraudSection({ tactics, headline }: AntiFraudSectionProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            {headline}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {tactics.map((tactic, index) => (
            <Card
              key={`tactic-${tactic.title}-${index}`}
              className={index % 2 === 0 ? 'bg-white' : 'bg-muted'}
            >
              <CardHeader>
                {tactic.icon && (
                  <div className="mb-4 h-12 w-12 text-primary">
                    {tactic.icon}
                  </div>
                )}
                <CardTitle className="text-lg font-semibold">
                  {tactic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {tactic.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
