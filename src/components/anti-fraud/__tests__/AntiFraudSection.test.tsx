import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { AntiFraudSection } from '../AntiFraudSection';

describe('AntiFraudSection', () => {
  const mockTactics = [
    { title: 'Odometer Fraud', description: 'Rolling back mileage' },
    { title: 'Paint Fraud', description: 'Hiding damage' },
    { title: 'Hidden Damage', description: 'Unreported accidents' },
    { title: 'Document Fraud', description: 'Forged papers' },
  ];

  it('renders all fraud tactics', async () => {
    const screen = await render(<AntiFraudSection tactics={mockTactics} />);

    await expect.element(screen.getByText('Odometer Fraud')).toBeInTheDocument();
    await expect.element(screen.getByText('Document Fraud')).toBeInTheDocument();
  });

  it('displays tactic descriptions', async () => {
    const screen = await render(<AntiFraudSection tactics={mockTactics} />);

    await expect.element(screen.getByText('Rolling back mileage')).toBeInTheDocument();
  });

  it('displays headline when provided', async () => {
    const screen = await render(
      <AntiFraudSection
        tactics={mockTactics}
        headline="Dishonest Seller Tactics"
      />,
    );

    await expect.element(screen.getByText('Dishonest Seller Tactics')).toBeInTheDocument();
  });
});
