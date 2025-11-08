import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { ServiceDetailSection } from '../ServiceDetailSection';

describe('ServiceDetailSection', () => {
  const defaultProps = {
    image: '/test-image.jpg',
    imageAlt: 'Test Service',
    imagePosition: 'left' as const,
    title: 'Test Service Title',
    description: 'Test service description',
  };

  it('renders service title and description', async () => {
    const screen = await render(<ServiceDetailSection {...defaultProps} />);

    await expect.element(screen.getByText('Test Service Title')).toBeInTheDocument();
    await expect.element(screen.getByText('Test service description')).toBeInTheDocument();
  });

  it('renders CTA button when provided', async () => {
    const screen = await render(
      <ServiceDetailSection
        {...defaultProps}
        ctaText="Book Now"
        ctaHref="/booking"
      />,
    );

    await expect.element(screen.getByText('Book Now')).toBeInTheDocument();
  });

  it('displays pricing when provided', async () => {
    const screen = await render(
      <ServiceDetailSection
        {...defaultProps}
        pricing="SĀKOT NO 50 EUR"
      />,
    );

    await expect.element(screen.getByText('SĀKOT NO 50 EUR')).toBeInTheDocument();
  });
});
