import { Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type CoverageBadgeProps = {
  text: string;
  className?: string;
};

export function CoverageBadge({ text, className = '' }: CoverageBadgeProps) {
  return (
    <Badge
      className={`flex items-center gap-2 border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-sm ${className}`}
    >
      <Globe className="h-4 w-4" />
      <span className="font-semibold">{text}</span>
    </Badge>
  );
}
