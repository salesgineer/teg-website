'use client';

import {
  AlertCircle,
  AlertTriangle,
  Calendar,
  Cog,
  FileText,
  Gauge,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type FraudTactic = {
  title: string;
  description: string;
};

type AntiFraudSectionProps = {
  tactics: readonly FraudTactic[];
  headline?: string;
  subheadline?: string;
  expertDetectsText?: string;
  ctaText?: string;
};

export function AntiFraudSection({ tactics, headline, subheadline, expertDetectsText, ctaText }: AntiFraudSectionProps) {
  // Icon mapping for each fraud tactic - defined inside component to avoid module-level JSX
  const getTacticIcon = (index: number) => {
    const iconProps = {
      className: 'h-24 w-24 text-destructive/40',
      strokeWidth: 1.5,
    };

    switch (index) {
      case 0:
        return <Gauge {...iconProps} key="gauge" />; // Odometer correction
      case 1:
        return <AlertCircle {...iconProps} key="crash" />; // Hidden accident traces
      case 2:
        return <ShieldAlert {...iconProps} key="shield" />; // Damaged safety systems
      case 3:
        return <Cog {...iconProps} key="engine" />; // Engine defect hiding
      case 4:
        return <Calendar {...iconProps} key="calendar" />; // True year and equipment
      case 5:
        return <FileText {...iconProps} key="file" />; // Service book and documents
      default:
        return null;
    }
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-destructive/3 via-background to-destructive/3 py-16 md:py-24">
      {/* Animated background warning pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.6),transparent_70%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {headline && (
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-red-500 md:text-4xl">
              {headline}
            </h2>
            {subheadline && (
              <p className="mx-auto max-w-2xl text-lg text-red-400">
                {subheadline}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tactics.map((tactic, index) => (
            <Card
              key={`tactic-${tactic.title}-${index}`}
              className={cn(
                'group relative overflow-hidden border-2 transition-all duration-300',
                'hover:border-destructive/50 hover:shadow-lg hover:shadow-destructive/20',
                'hover:-translate-y-1 hover:scale-[1.02]',
                'bg-gradient-to-br from-background to-destructive/5',
                'opacity-0 animate-fade-in-up',
              )}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Warning indicator bar */}
              <div className="absolute top-0 left-0 h-1 w-full animate-pulse bg-gradient-to-r from-destructive via-orange-500 to-destructive" />

              <CardHeader className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative">
                    <AlertTriangle className="h-8 w-8 animate-pulse text-destructive" />
                    <div className="absolute inset-0 h-8 w-8 animate-ping rounded-full bg-destructive/20" />
                  </div>
                  <div className="flex-1">
                    <div className="h-1 w-full rounded-full bg-destructive/20">
                      <div
                        className="h-full bg-destructive"
                        style={{
                          width: '0%',
                          animation: `progress 2s ease-in-out ${index * 200}ms forwards`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-red-500 group-hover:text-red-400">
                  {tactic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative min-h-[100px]">
                  <p className="relative z-10 pr-16 text-sm leading-relaxed text-red-400">
                    {tactic.description}
                  </p>
                  {/* Unique icon positioned diagonally opposite to AlertTriangle - behind text */}
                  <div className="pointer-events-none absolute -top-2 -right-2 z-0 scale-110 opacity-50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-70">
                    {getTacticIcon(index)}
                  </div>
                </div>

                {/* TEG protection indicator */}
                {expertDetectsText && (
                  <div className="mt-4 flex items-center gap-2 rounded-md bg-primary/10 p-2 text-xs">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">
                      {expertDetectsText}
                    </span>
                  </div>
                )}
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-destructive/0 via-destructive/0 to-destructive/0 transition-all duration-300 group-hover:from-destructive/5 group-hover:via-destructive/5 group-hover:to-destructive/5" />
            </Card>
          ))}
        </div>

        {/* Call to action */}
        {ctaText && (
          <div className="mt-12 text-center">
            <div className="group relative inline-flex items-center gap-3 rounded-xl border-2 border-primary bg-primary px-8 py-4 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30">
              <ShieldCheck className="h-6 w-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
              <p className="text-xl font-bold text-primary-foreground transition-colors duration-300">
                {ctaText}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
