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
