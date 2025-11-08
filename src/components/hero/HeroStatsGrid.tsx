import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatItem = {
  value: string;
  label: string;
  description?: string; // Additional descriptive subtext
  icon?: LucideIcon;
};

type HeroStatsGridProps = {
  stats: StatItem[];
  className?: string;
};

// Map stat values to descriptions if not provided
// Using Halbert's copywriting: Focus on benefits, be specific, create value
const getDescription = (value: string): string => {
  const descriptions: Record<string, string> = {
    'Neatkarīgi no dīleriem': 'Nav interešu konfliktu. Mēs strādājam tikai jūsu labā.',
    'Detalizēti pārskati': 'Katrs defekts dokumentēts ar fotogrāfijām un ekspertu komentāriem.',
    'Visā Eiropā': 'Pārbaude notiek uz vietas. Jūs saņemat ziņojumu tajā pašā dienā.',
  };
  return descriptions[value] || '';
};

/**
 * HeroStatsGrid - Premium trust indicator cards for automotive services
 * Displays key differentiators with prominent icons, clear hierarchy, and descriptive text
 */
export function HeroStatsGrid({ stats, className = '' }: HeroStatsGridProps) {
  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <div className={cn('flex flex-wrap items-stretch justify-start gap-4', className)}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const description = stat.description || getDescription(stat.value);

        return (
          <div
            key={index}
            className={cn(
              'group relative flex flex-col items-start rounded-xl',
              'px-4 py-4 backdrop-blur-md border-2',
              'bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5',
              'border-primary/40 shadow-lg transition-all duration-300',
              'hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30',
              'hover:border-primary/60 hover:from-primary/10 hover:via-primary/15 hover:to-primary/10',
              'dark:from-primary/20 dark:via-primary/15 dark:to-primary/20',
              'dark:border-primary/50 dark:hover:border-primary/70',
              'ring-2 ring-primary/10 dark:ring-primary/20',
              'w-[200px] min-h-[160px]',
            )}
          >
            {/* Icon with background */}
            {Icon && (
              <div className={cn(
                'mb-3 flex h-10 w-10 items-center justify-center rounded-lg',
                'bg-primary/20 ring-2 ring-primary/30',
                'transition-all duration-300',
                'group-hover:bg-primary/30 group-hover:ring-primary/50',
                'group-hover:scale-105',
                'dark:bg-primary/30 dark:ring-primary/40',
                'dark:group-hover:bg-primary/40 dark:group-hover:ring-primary/60',
              )}
              >
                <Icon className={cn(
                  'h-5 w-5 text-primary transition-colors duration-300',
                  'group-hover:text-primary-600 dark:text-white',
                  'dark:group-hover:text-yellow-400',
                )}
                />
              </div>
            )}

            {/* Value/Title */}
            <div className={cn(
              'mb-2 text-left text-sm font-bold leading-tight',
              'text-foreground dark:text-white',
              'transition-colors duration-300',
            )}
            >
              {stat.value}
            </div>

            {/* Label */}
            <div className={cn(
              'mb-3 text-left text-xs font-semibold',
              'text-primary dark:text-yellow-400',
              'transition-colors duration-300',
            )}
            >
              {stat.label}
            </div>

            {/* Description/Subtext */}
            {description && (
              <div className={cn(
                'mt-auto text-left text-[11px] leading-relaxed',
                'text-muted-foreground/90 dark:text-gray-300',
                'transition-colors duration-300',
              )}
              >
                {description}
              </div>
            )}

            {/* Colored accent line on hover */}
            <div className={cn(
              'absolute bottom-0 left-0 h-1 w-0 rounded-full',
              'bg-gradient-to-r from-primary to-primary/60 transition-all duration-300',
              'group-hover:w-full',
              'dark:from-yellow-400 dark:to-yellow-500',
            )}
            />
          </div>
        );
      })}
    </div>
  );
}
