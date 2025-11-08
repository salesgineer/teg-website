import { ABOUT_PAGE_COPY } from '@/lib/constants/copy';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Centered Brand Story Section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* TEG Logo/Brand Icon - Placeholder for actual logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <svg
                className="h-16 w-16 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6l-5.16 1.86a1 1 0 0 0-.84.99V16h3m12 0v5H3v-5" />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-3xl leading-tight font-bold md:text-4xl">
            {ABOUT_PAGE_COPY.headline}
          </h1>

          {/* Greeting */}
          <p className="mb-6 text-2xl font-semibold text-primary">
            {ABOUT_PAGE_COPY.greeting}
          </p>

          {/* Multiple Paragraphs */}
          <div className="space-y-6">
            {ABOUT_PAGE_COPY.paragraphs.map((paragraph, index) => (
              <p
                key={`paragraph-${index}`}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Personal Signature Element */}
          <div className="mt-12 flex justify-center">
            <p className="text-xl font-semibold text-primary italic">
              {ABOUT_PAGE_COPY.closing}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
