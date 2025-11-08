import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type ValueCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
};

/**
 * ValueCard - Displays a company value with title, description, and optional icon
 * Used on the About page to showcase TEG's core values
 */
export function ValueCard({ title, description, icon: Icon, className = '' }: ValueCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-xl border-2 p-6',
        'bg-gradient-to-br from-background to-muted/30',
        'border-primary/20 transition-all duration-300',
        'hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10',
        'dark:border-primary/30 dark:hover:border-primary/50',
        className,
      )}
    >
      {/* Icon */}
      {Icon && (
        <div
          className={cn(
            'mb-4 flex h-12 w-12 items-center justify-center rounded-lg',
            'bg-primary/10 ring-2 ring-primary/20',
            'transition-all duration-300',
            'group-hover:bg-primary/20 group-hover:ring-primary/40',
            'dark:bg-primary/20 dark:ring-primary/30',
            'dark:group-hover:bg-primary/30 dark:group-hover:ring-primary/50',
          )}
        >
          <Icon
            className={cn(
              'h-6 w-6 text-primary transition-colors duration-300',
              'group-hover:text-primary-600 dark:text-primary-foreground',
            )}
          />
        </div>
      )}

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-foreground dark:text-white">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground dark:text-gray-300">{description}</p>

      {/* Accent line on hover */}
      <div
        className={cn(
          'absolute bottom-0 left-0 h-1 w-0 rounded-full',
          'bg-gradient-to-r from-primary to-primary/60 transition-all duration-300',
          'group-hover:w-full',
        )}
      />
    </div>
  );
}
