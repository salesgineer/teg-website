import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { InstagramFeedSection } from '../InstagramFeedSection';

describe('InstagramFeedSection', () => {
  it('displays Instagram handle', async () => {
    const screen = await render(<InstagramFeedSection handle="teg.auto" />);

    await expect.element(screen.getByText('@teg.auto')).toBeInTheDocument();
  });

  it('renders follow button', async () => {
    const screen = await render(<InstagramFeedSection handle="teg.auto" />);

    await expect.element(screen.getByText('Sekot Instagram')).toBeInTheDocument();
  });

  it('renders custom posts when provided', async () => {
    const customPosts = [
      { imageUrl: '/post1.jpg', caption: 'Post 1', link: 'https://test.com/1' },
      { imageUrl: '/post2.jpg', caption: 'Post 2', link: 'https://test.com/2' },
    ];
    const screen = await render(<InstagramFeedSection handle="teg.auto" posts={customPosts} />);

    await expect.element(screen.getByText('Post 1')).toBeInTheDocument();
  });
});
