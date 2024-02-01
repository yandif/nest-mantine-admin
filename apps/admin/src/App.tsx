import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@/styles/global.css';
import 'dayjs/locale/zh-cn';

import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Router } from './Router';
import { theme } from './theme';

dayjs.extend(customParseFormat);

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <DatesProvider settings={{ locale: 'zh-cn' }}>
        <Router />
      </DatesProvider>
    </MantineProvider>
  );
}
