import { Anchor, Button, Text, Title } from '@mantine/core';
import { useCallback, useState } from 'react';

import classes from './Welcome.module.css';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
};

export function Welcome() {
  const { count, increment } = useCounter();
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine1
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
      {count}
      <Button onClick={increment}>点击</Button>
      <button className="counter" type="button" onClick={increment}>
        count is: {count}
      </button>
    </>
  );
}
