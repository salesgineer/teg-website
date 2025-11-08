import { Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type CoverageBadgeProps = {
  text: string;
  className?: string;
};

export function CoverageBadge({ text, className = '' }: CoverageBadgeProps) {
  return (
    <Badge
      className={`flex items-center gap-2 border-foreground/20 bg-background/80 px-4 py-2 text-foreground backdrop-blur-sm dark:border-white/30 dark:bg-white/20 dark:text-white ${className}`}
    >
      <Globe className="h-4 w-4" />
      <span className="font-semibold">{text}</span>
    </Badge>
  );
}
