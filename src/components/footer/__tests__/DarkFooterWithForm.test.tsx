import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { DarkFooterWithForm } from '../DarkFooterWithForm';

describe('DarkFooterWithForm', () => {
  it('renders form with all required fields', async () => {
    const screen = await render(<DarkFooterWithForm />);

    await expect.element(screen.getByLabelText('E-pasts')).toBeInTheDocument();
    await expect.element(screen.getByLabelText('Vārds')).toBeInTheDocument();
  });

  it('displays headline', async () => {
    const screen = await render(<DarkFooterWithForm headline="Sazin atsaities" />);

    await expect.element(screen.getByText('Sazin atsaities')).toBeInTheDocument();
  });

  it('renders submit button', async () => {
    const screen = await render(<DarkFooterWithForm />);

    await expect.element(screen.getByText('Nosūtīt')).toBeInTheDocument();
  });
});
