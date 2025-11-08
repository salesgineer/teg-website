'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGalleryGridProps = {
  images: GalleryImage[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
};

const DEFAULT_COLUMNS = { mobile: 2, tablet: 3, desktop: 4 };

export function ImageGalleryGrid({
  images,
  columns = DEFAULT_COLUMNS,
}: ImageGalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const gridColsClass = `grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`;

  return (
    <>
      <div className={`grid ${gridColsClass} gap-4`}>
        {images.map((image, index) => (
          <button
            key={`gallery-${image.src}-${index}`}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-muted transition-opacity hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
            type="button"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={`(max-width: 768px) ${100 / columns.mobile}vw, (max-width: 1024px) ${100 / columns.tablet}vw, ${100 / columns.desktop}vw`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
              {selectedImage.caption && (
                <p className="text-center text-sm text-muted-foreground">
                  {selectedImage.caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
