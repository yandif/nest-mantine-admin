import { AppShell, Burger, Group, InputBase, ScrollArea, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconSettings } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';

import { Tabs } from '@/components/UI';

import { MenuSearch } from './MenuSearch';

export function AdminLayout() {
  const [opened, { toggle }] = useDisclosure(true);

  const headerHeight = 50;
  return (
    <AppShell
      header={{ height: headerHeight }}
      navbar={{ width: 188, breakpoint: 'sm', collapsed: { desktop: !opened, mobile: !opened } }}
      py="md"
      px="0">
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
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<IconSettings />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">
            <Group>
              <InputBase></InputBase> <InputBase></InputBase>
            </Group>
            <Outlet />
          </Tabs.Panel>
        </Tabs>
      </AppShell.Main>
    </AppShell>
  );
}
