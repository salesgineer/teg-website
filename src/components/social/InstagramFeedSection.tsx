'use client';

import type { InstagramPost } from './InstagramImageFeed';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InstagramImageFeed } from './InstagramImageFeed';

type InstagramFeedSectionProps = {
  handle: string;
  profileUrl?: string;
  /** Manual posts with image URLs, captions, etc. */
  posts?: InstagramPost[];
  /** Instagram post URLs (for future API integration) */
  postUrls?: string[];
};

const DEFAULT_PROFILE_URL = 'https://instagram.com/teg.auto';

// Placeholder images for when no posts are provided
const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    imageUrl: 'https://picsum.photos/seed/car-inspection-1/400/400',
    caption: 'Automotive inspection service',
    postUrl: DEFAULT_PROFILE_URL,
    authorName: 'teg.auto',
  },
  {
    imageUrl: 'https://picsum.photos/seed/vehicle-check-2/400/400',
    caption: 'Professional car inspection',
    postUrl: DEFAULT_PROFILE_URL,
    authorName: 'teg.auto',
  },
  {
    imageUrl: 'https://picsum.photos/seed/auto-diagnostics-3/400/400',
    caption: 'Expert vehicle diagnostics',
    postUrl: DEFAULT_PROFILE_URL,
    authorName: 'teg.auto',
  },
];

export function InstagramFeedSection({
  handle,
  profileUrl = DEFAULT_PROFILE_URL,
  posts,
  postUrls = [],
}: InstagramFeedSectionProps) {
  // Determine which posts to display
  // Priority: manual posts > postUrls (future API) > placeholders
  let displayPosts: InstagramPost[] = [];

  if (posts && posts.length > 0) {
    // Use manual posts if provided
    displayPosts = posts;
  } else if (postUrls.length > 0) {
    // TODO: When API integration is added, fetch images from postUrls here
    // For now, fall back to placeholders
    // To get image URLs manually:
    // 1. Open Instagram post in browser
    // 2. Right-click image → "Copy image address" or inspect element
    // 3. Use that URL in the 'posts' prop
    displayPosts = PLACEHOLDER_POSTS;
  } else {
    // No posts provided, use placeholders
    displayPosts = PLACEHOLDER_POSTS;
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold md:text-4xl">
              @
              {handle}
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Sekot Instagram
            </Link>
          </Button>
        </div>

        <InstagramImageFeed posts={displayPosts} />
      </div>
    </section>
  );
}
