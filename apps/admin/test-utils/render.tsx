import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';

import { theme } from '../src/theme';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<MantineProvider theme={theme}>{ui}</MantineProvider>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
}
