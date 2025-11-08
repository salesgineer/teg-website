import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { ImageGalleryGrid } from '../ImageGalleryGrid';

describe('ImageGalleryGrid', () => {
  const mockImages = [
    { src: '/img1.jpg', alt: 'Image 1' },
    { src: '/img2.jpg', alt: 'Image 2' },
    { src: '/img3.jpg', alt: 'Image 3' },
    { src: '/img4.jpg', alt: 'Image 4' },
  ];

  it('renders all images', async () => {
    const screen = await render(<ImageGalleryGrid images={mockImages} />);

    await expect.element(screen.getByAltText('Image 1')).toBeInTheDocument();
    await expect.element(screen.getByAltText('Image 4')).toBeInTheDocument();
  });

  it('renders grid container', async () => {
    const screen = await render(<ImageGalleryGrid images={mockImages} />);
    const grid = screen.container.querySelector('div[class*="grid"]');

    expect(grid).toBeTruthy();
  });
});
