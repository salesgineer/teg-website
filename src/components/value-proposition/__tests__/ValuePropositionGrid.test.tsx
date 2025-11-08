import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { ValuePropositionGrid } from '../ValuePropositionGrid';

describe('ValuePropositionGrid', () => {
  const mockItems = [
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'Description 3' },
    { title: 'Item 4', description: 'Description 4' },
  ];

  it('renders correct number of items', async () => {
    const screen = await render(<ValuePropositionGrid items={mockItems} />);

    await expect.element(screen.getByText('Item 1')).toBeInTheDocument();
    await expect.element(screen.getByText('Item 4')).toBeInTheDocument();
  });

  it('displays headline when provided', async () => {
    const screen = await render(
      <ValuePropositionGrid
        items={mockItems}
        headline="Test Headline"
      />,
    );

    await expect.element(screen.getByText('Test Headline')).toBeInTheDocument();
  });

  it('displays item titles and descriptions', async () => {
    const screen = await render(<ValuePropositionGrid items={mockItems} />);

    await expect.element(screen.getByText('Item 2')).toBeInTheDocument();
    await expect.element(screen.getByText('Description 2')).toBeInTheDocument();
  });
});
