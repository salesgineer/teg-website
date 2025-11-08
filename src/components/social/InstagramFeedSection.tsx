import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type InstagramPost = {
  imageUrl: string;
  caption?: string;
  link: string;
};

type InstagramFeedSectionProps = {
  handle: string;
  posts?: InstagramPost[];
  profileUrl?: string;
};

const DEFAULT_POSTS: InstagramPost[] = [];
const DEFAULT_PROFILE_URL = 'https://instagram.com/teg.auto';

export function InstagramFeedSection({
  handle,
  posts = DEFAULT_POSTS,
  profileUrl = DEFAULT_PROFILE_URL,
}: InstagramFeedSectionProps) {
  // Placeholder posts if none provided
  const displayPosts = posts.length > 0
    ? posts
    : [
        { imageUrl: '/images/instagram-placeholder-1.jpg', link: profileUrl },
        { imageUrl: '/images/instagram-placeholder-2.jpg', link: profileUrl },
        { imageUrl: '/images/instagram-placeholder-3.jpg', link: profileUrl },
      ];

  return (
    <section className="bg-white py-16 md:py-24">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post, index) => (
            <Card key={`post-${post.imageUrl}-${index}`} className="overflow-hidden">
              <CardContent className="p-0">
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={post.imageUrl}
                      alt={post.caption || `Instagram post ${index + 1}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
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
      </div>
    </section>
  );
}
