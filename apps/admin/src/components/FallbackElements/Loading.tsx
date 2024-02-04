import { Group, Loader } from '@mantine/core';

export function Loading() {
  return (
    <Group h="100%" w="100%" align="center" justify="center">
      <Loader size={48} type="dots" />
    </Group>
  );
}
