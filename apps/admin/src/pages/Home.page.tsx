import { Box } from '@mantine/core';
import {
  Calendar,
  DateInput,
  DatePickerInput,
  DateTimePicker,
  MonthPickerInput,
  TimeInput,
  YearPickerInput,
} from '@mantine/dates';
import dayjs from 'dayjs';
import { useState } from 'react';

export function HomePage() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <Box w={300} mx="auto">
      {JSON.stringify(value.map((v) => dayjs(v)?.format('YYYY-MM-DD HH:mm:ss')))}
      <Calendar />
      <TimeInput label="Time input" />
      <DateInput label="Date input" />
      <DateTimePicker label="Datetime input" />
      <DatePickerInput
        type="range"
        label="Pick dates"
        placeholder="Pick dates"
        value={value}
        onChange={setValue}
      />
      <MonthPickerInput label="Month picker input" />
      <YearPickerInput label="Year picker input" />
    </Box>
  );
}
