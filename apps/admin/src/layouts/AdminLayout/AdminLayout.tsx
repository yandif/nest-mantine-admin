import { AppShell, Burger, Group, ScrollArea, Skeleton, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconSettings } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  const [opened, { toggle }] = useDisclosure(true);

  const headerHeight = 60;
  return (
    <AppShell
      header={{ height: headerHeight }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: !opened, mobile: !opened } }}
      padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          60 links in a scrollable section
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
        <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
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
            <Outlet />
          </Tabs.Panel>
        </Tabs>
      </AppShell.Main>
    </AppShell>
  );
}
