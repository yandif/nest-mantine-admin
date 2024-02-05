import { createTheme } from '@mantine/core';
import {
  DateInput,
  DatePickerInput,
  DateTimePicker,
  MonthPickerInput,
  TimeInput,
  YearPickerInput,
} from '@mantine/dates';

export const theme = createTheme({
  primaryColor: 'sky',
  colors: {
    sky: [
      '#e1f9ff',
      '#ccedff',
      '#9ad7ff',
      '#64c1ff',
      '#3baefe',
      '#20a2fe',
      '#099cff',
      '#0088e4',
      '#0078cd',
      '#0069b6',
    ],
  },
  components: {
    TimeInput: TimeInput.extend({
      defaultProps: {
        withSeconds: true,
      },
    }),
    DateInput: DateInput.extend({
      defaultProps: {
        valueFormat: 'YYYY-MM-DD',
        clearable: true,
      },
    }),
    DateTimePicker: DateTimePicker.extend({
      defaultProps: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        withSeconds: true,
        clearable: true,
      },
    }),
    DatePickerInput: DatePickerInput.extend({
      defaultProps: {
        valueFormat: 'YYYY-MM-DD',
        clearable: true,
      },
    }),
    MonthPickerInput: MonthPickerInput.extend({
      defaultProps: {
        valueFormat: 'YYYY-MM',
        clearable: true,
      },
    }),
    YearPickerInput: YearPickerInput.extend({
      defaultProps: {
        valueFormat: 'YYYY',
        clearable: true,
      },
    }),
  },
});
