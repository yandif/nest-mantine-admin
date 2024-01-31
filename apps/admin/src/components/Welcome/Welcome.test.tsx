import { render, screen, userEvent } from '@test-utils';
import { debug } from 'vitest-preview';

import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Vite guide link', async () => {
    render(<Welcome />);

    for (let i = 0; i < 10; i++) {
      await userEvent.click(screen.getByText('点击'));
    }

    debug();

    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/',
    );
  });
});
