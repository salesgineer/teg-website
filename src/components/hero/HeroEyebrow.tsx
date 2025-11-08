import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type HeroEyebrowProps = {
  text: string;
  showStar?: boolean;
  className?: string;
};

/**
 * HeroEyebrow - Small badge at top of hero section
 * Displays trust indicator or tagline (e.g., "America's Premier Recovery Network")
 */
export function HeroEyebrow({ text, showStar = true, className = '' }: HeroEyebrowProps) {
  return (
    <Badge
      className={cn(
        'flex w-fit items-center gap-2 border-primary/50 bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm dark:bg-black/40 dark:text-white',
        className,
      )}
    >
      {showStar && <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />}
      <span>{text}</span>
    </Badge>
  );
}
