import type { LucideIcon } from 'lucide-react';
import { ValueCard } from './ValueCard';

type ValueItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type ValuesGridProps = {
  values: ValueItem[];
  className?: string;
};

/**
 * ValuesGrid - Displays a grid of company values
 * Used on the About page to showcase TEG's core values
 */
export function ValuesGrid({ values, className = '' }: ValuesGridProps) {
  if (!values || values.length === 0) {
    return null;
  }

  return (
    <div className={`grid gap-6 md:grid-cols-3 ${className}`}>
      {values.map((value, index) => (
        <ValueCard
          key={index}
          title={value.title}
          description={value.description}
          icon={value.icon}
        />
      ))}
    </div>
  );
}
