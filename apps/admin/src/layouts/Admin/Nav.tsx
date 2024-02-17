import { NavLink } from '@mantine/core';
import { IconFingerprint, IconGauge } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { AdminStore } from '@/stores/admin';

export function Nav() {
  return (
    <>
      <NavLink
        component={Link}
        to="/"
        onClick={() => {
          AdminStore.collapsed.mobile.set(true);
        }}
        label="  首页"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      />
      <NavLink
        component={Link}
        to="/a"
        label="A"
        onClick={() => {
          AdminStore.collapsed.mobile.set(true);
        }}
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      />
      <NavLink
        component={Link}
        to="/b"
        label="B"
        onClick={() => {
          AdminStore.collapsed.mobile.set(true);
        }}
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      />
    </>
  );
}
