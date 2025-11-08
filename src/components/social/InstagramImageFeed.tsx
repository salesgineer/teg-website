'use client';

import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export type InstagramPost = {
  imageUrl: string;
  caption?: string;
  postUrl: string;
  authorName?: string;
};

type InstagramImageFeedProps = {
  posts: InstagramPost[];
};

/**
 * Custom Instagram feed component that displays images in cards
 * with full dark mode support and custom styling
 */
export function InstagramImageFeed({ posts }: InstagramImageFeedProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card
          key={`instagram-post-${post.postUrl}-${index}`}
          className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg"
        >
          <CardContent className="p-0">
            <Link
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={post.imageUrl}
                  alt={post.caption || `Instagram post by ${post.authorName || 'teg.auto'}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Instagram icon overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                  <Instagram className="h-12 w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
              {post.caption && (
                <div className="p-4">
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {post.caption}
                  </p>
                </div>
              )}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
