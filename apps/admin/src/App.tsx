import '@/styles/global.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'dayjs/locale/zh-cn';

import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';

import { theme } from '@/config/theme';
import { Router } from '@/routes/Router';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <DatesProvider settings={{ locale: 'zh-cn' }}>
        <Router />
      </DatesProvider>
    </MantineProvider>
  );
}
