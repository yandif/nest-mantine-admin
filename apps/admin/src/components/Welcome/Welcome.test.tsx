import { render, screen } from '@test-utils';
import { debug } from 'vitest-preview';

import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Welcome />);
    debug();
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/',
    );
  });
});
