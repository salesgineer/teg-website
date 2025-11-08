import { Star } from 'lucide-react';

type TestimonialQuoteProps = {
  quote: string;
  author: string;
  rating?: number;
  className?: string;
};

export function TestimonialQuote({
  quote,
  author,
  rating = 5,
  className = '',
}: TestimonialQuoteProps) {
  return (
    <div className={`text-center ${className}`}>
      {/* Quote */}
      <blockquote className="mx-auto mb-4 max-w-2xl text-lg font-medium text-white italic sm:text-xl md:text-2xl">
        "
        {quote}
        "
      </blockquote>

      {/* Author and Rating */}
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-600 text-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Author Name */}
        <cite className="text-gray-300 not-italic">
          —
          {author}
        </cite>
      </div>
    </div>
  );
}
