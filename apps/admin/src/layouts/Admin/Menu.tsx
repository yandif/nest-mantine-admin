import { Box, Menu, UnstyledButton } from '@mantine/core';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowsLeftRight,
  IconMaximize,
  IconRefresh,
  IconSquareX,
} from '@tabler/icons-react';
import { useState } from 'react';

export function Menus({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const iconProps = { size: 14, stroke: 2 };
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
        <Menu.Item
          onClick={(e) => e.stopPropagation()}
          leftSection={<IconSquareX {...iconProps} />}>
          关闭全部
        </Menu.Item>
        <Menu.Item
          onClick={(e) => e.stopPropagation()}
          leftSection={<IconArrowNarrowRight {...iconProps} />}>
          关闭右侧
        </Menu.Item>
        <Menu.Item
          onClick={(e) => e.stopPropagation()}
          leftSection={<IconArrowNarrowLeft {...iconProps} />}>
          关闭左侧
        </Menu.Item>
        <Menu.Item
          onClick={(e) => e.stopPropagation()}
          leftSection={<IconArrowsLeftRight {...iconProps} />}>
          {' '}
          关闭其他
        </Menu.Item>
        <Menu.Item
          onClick={(e) => e.stopPropagation()}
          leftSection={<IconMaximize {...iconProps} />}>
          全屏
        </Menu.Item>
        <Menu.Item
          onClick={(e) => e.stopPropagation()}
          leftSection={<IconRefresh {...iconProps} />}>
          刷新
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
