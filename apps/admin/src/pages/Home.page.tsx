import { Title } from '@mantine/core';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/Welcome/Welcome';

export function HomePage() {
  const nav = useNavigate();
  const data = useLoaderData();

  return (
    <>
      <Title order={1} onClick={() => nav('/a')}>
        HomePage
        {JSON.stringify(data)}
        <Outlet context={{ a: 123 }}></Outlet>
      </Title>
      <Welcome></Welcome>
      <ColorSchemeToggle />{' '}
      <Title order={1} onClick={() => nav('/a')}>
        HomePage
        {JSON.stringify(data)}
        <Outlet context={{ a: 123 }}></Outlet>
      </Title>
      <Welcome></Welcome>
      <ColorSchemeToggle />{' '}
      <Title order={1} onClick={() => nav('/a')}>
        HomePage
        {JSON.stringify(data)}
        <Outlet context={{ a: 123 }}></Outlet>
      </Title>
      <Welcome></Welcome>
      <ColorSchemeToggle />{' '}
      <Title order={1} onClick={() => nav('/a')}>
        HomePage
        {JSON.stringify(data)}
        <Outlet context={{ a: 123 }}></Outlet>
      </Title>
      <Welcome></Welcome>
      <ColorSchemeToggle />
    </>
  );
}
