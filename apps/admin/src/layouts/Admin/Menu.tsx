import { Box, Menu } from '@mantine/core';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowsLeftRight,
  IconMaximize,
  IconRefresh,
  IconSquareX,
} from '@tabler/icons-react';
import { useCallback, useMemo, useState } from 'react';

export function Menus({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const iconProps = { size: 14, stroke: 2 };

  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.stopPropagation();
  }, []);

  const menus = useMemo(
    () => [
      { onClick: handleClick, label: '关闭全部', icon: IconSquareX },
      { onClick: handleClick, label: '关闭右侧', icon: IconArrowNarrowRight },
      { onClick: handleClick, label: '关闭左侧', icon: IconArrowNarrowLeft },
      { onClick: handleClick, label: '关闭其他', icon: IconArrowsLeftRight },
      { onClick: handleClick, label: '全屏', icon: IconMaximize },
      { onClick: handleClick, label: '刷新', icon: IconRefresh },
    ],
    [],
  );

  return (
    <Menu trigger={'none' as 'click'} opened={opened} onChange={setOpened} shadow="md" withArrow>
      <Menu.Target>
        <Box
          onClick={() => {}}
          onContextMenu={(e) => {
            e.preventDefault();
            setOpened(true);
          }}>
          {children}
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        {menus.map(({ onClick, label, icon: Icon }) => (
          <Menu.Item key={label} rightSection={<Icon {...iconProps} />} onClick={onClick}>
            {label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
