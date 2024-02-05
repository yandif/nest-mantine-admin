import { useSelector } from '@legendapp/state/react';
import { AppShell, Burger, Group, ScrollArea, Skeleton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Outlet } from 'react-router-dom';

import { AdminStore } from '@/stores/admin';

import classes from './index.module.css';
import { MenuSearch } from './MenuSearch';

export function Admin() {
  const adminStore = useSelector(() => AdminStore.get());
  const opened = !adminStore.collapsed.mobile;
  const toggle = () => {
    AdminStore.collapsed.mobile.set(opened);
  };

  const headerHeight = 50;
  return (
    <AppShell
      header={{ height: headerHeight }}
      navbar={{ width: 188, breakpoint: 'sm', collapsed: adminStore.collapsed }}
      classNames={{
        root: classes.root,
        header: classes.header,
      }}>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section p="sm">
          <MenuSearch />
        </AppShell.Section>
        <AppShell.Section grow px="md" component={ScrollArea}>
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
        <AppShell.Section>footer</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main h={`calc(100vh - ${headerHeight}px)`}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
