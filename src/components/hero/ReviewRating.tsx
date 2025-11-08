import { Star } from 'lucide-react';

type ReviewRatingProps = {
  rating: number;
  reviewCount: number;
  reviewLabel?: string;
  className?: string;
};

export function ReviewRating({
  rating,
  reviewCount,
  reviewLabel = `no ${reviewCount}+ atsauksmēm`,
  className = '',
}: ReviewRatingProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-6 w-6 ${
              i < Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-600 text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Rating Text */}
      <div className="text-center">
        <span className="text-2xl font-bold text-white">{rating.toFixed(1)}</span>
        <span className="text-gray-300"> / 5</span>
        <span className="block text-sm text-gray-300">{reviewLabel}</span>
      </div>
    </div>
  );
}
