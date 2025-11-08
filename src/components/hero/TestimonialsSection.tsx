import { ReviewRating } from './ReviewRating';
import { TestimonialQuote } from './TestimonialQuote';

type Testimonial = {
  quote: string;
  author: string;
  rating: number;
};

type TestimonialsSectionProps = {
  overallRating: number;
  reviewCount: number;
  featuredTestimonial: Testimonial;
  className?: string;
};

export function TestimonialsSection({
  overallRating,
  reviewCount,
  featuredTestimonial,
  className = '',
}: TestimonialsSectionProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Overall Rating Display */}
      <ReviewRating rating={overallRating} reviewCount={reviewCount} />

      {/* Featured Testimonial */}
      <TestimonialQuote
        quote={featuredTestimonial.quote}
        author={featuredTestimonial.author}
        rating={featuredTestimonial.rating}
      />
    </div>
  );
}
