import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { InspectionCategoriesGrid } from '../InspectionCategoriesGrid';

describe('InspectionCategoriesGrid', () => {
  const mockCategories = [
    { title: 'Engine', items: ['Oil check', 'Filter check'] },
    { title: 'Brakes', items: ['Disc check', 'Pad check'] },
    { title: 'Electrical', items: ['Battery test', 'Lights check'] },
  ];

  it('renders all categories', async () => {
    const screen = await render(<InspectionCategoriesGrid categories={mockCategories} />);

    await expect.element(screen.getByText('Engine')).toBeInTheDocument();
    await expect.element(screen.getByText('Brakes')).toBeInTheDocument();
  });

  it('displays checklist items', async () => {
    const screen = await render(<InspectionCategoriesGrid categories={mockCategories} />);

    await expect.element(screen.getByText('Oil check')).toBeInTheDocument();
    await expect.element(screen.getByText('Battery test')).toBeInTheDocument();
  });

  it('renders CTA button when provided', async () => {
    const screen = await render(
      <InspectionCategoriesGrid
        categories={mockCategories}
        ctaText="Book Now"
      />,
    );

    await expect.element(screen.getByText('Book Now')).toBeInTheDocument();
  });
});
