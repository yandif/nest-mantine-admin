import { useSelector } from '@legendapp/state/react';
import {
  AppShell,
  Box,
  Burger,
  Button,
  CloseButton,
  Group,
  ScrollArea,
  Transition,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconChevronLeft, IconChevronRight, IconHome } from '@tabler/icons-react';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  UNSAFE_DataRouterStateContext,
  useLocation,
  useNavigate,
  useOutlet,
} from 'react-router-dom';

import { Tabs } from '@/components/UI';
import { AdminStore } from '@/stores/admin';

import classes from './index.module.css';
import { Menus } from './Menu';
import { MenuSearch } from './MenuSearch';
import { Nav } from './Nav';

const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

export function Admin() {
  const adminStore = useSelector(() => AdminStore.get());
  const opened = !adminStore.collapsed.mobile;
  const toggle = () => {
    AdminStore.collapsed.mobile.set(opened);
  };
  const componentList = useRef(new Map());
  const outLet = useOutlet();
  const { pathname } = useLocation();
  const forceUpdate = useUpdate();
  const nav = useNavigate();
  const state = useContext(UNSAFE_DataRouterStateContext);
  const ref = useRef<HTMLDivElement>(null);

  const scrollIntoView = useCallback(() => {
    if (ref.current) {
      ref.current.querySelector('button[data-active]')?.scrollIntoView({
        behavior: 'smooth', // 使用平滑滚动效果，如果不需要平滑效果可以使用 'auto'
        block: 'start', // 将目标元素的顶部对齐到滚动容器的顶部
        inline: 'nearest', // 将目标元素滚动到最近的边缘
      });
    }
  }, []);

  useEffect(() => {
    if (!componentList.current.has(pathname) || !state?.initialized) {
      componentList.current.set(pathname, outLet);
      forceUpdate();
    }

    scrollIntoView();
  }, [state?.initialized, pathname]);

  const [isScroll, setIsScroll] = useState(false);

  const check = useCallback(() => {
    if (ref.current) {
      setIsScroll(ref.current.scrollWidth > ref.current.clientWidth);
      // scrollIntoViewIfNeed
      scrollIntoView();
    }
  }, []);

  useEffect(check, [Array.from(componentList.current).length]);

  useEffect(() => {
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('resize', check);
    };
  }, []);
  console.log('123');
  const headerHeight = 50;
  const navbarWidth = 250;
  return (
    <AppShell
      header={{ height: headerHeight }}
      navbar={{ width: navbarWidth, breakpoint: 'sm', collapsed: adminStore.collapsed }}
      classNames={{
        root: classes.root,
        header: classes.header,
      }}>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
        <Tabs
          miw={80}
          style={{
            position: 'absolute',
            top: 14,
            left: navbarWidth,
            alignItems: 'flex-end',
            overflow: 'hidden',
            borderRadius: '6px 6px 0 0',
          }}
          value={pathname}
          onChange={(v) => {
            if (v !== pathname) {
              nav(v as string);
            }
          }}
          w="calc(100vw - 250px - 500px)"
          variant="outline"
          display="flex"
          p={0}>
          <Transition
            mounted={isScroll}
            transition="slide-right"
            duration={400}
            timingFunction="ease">
            {(styles) => (
              <Box
                className={classes.left}
                style={styles}
                onClick={() => {
                  if (ref.current) {
                    ref.current.scrollBy({ left: -ref.current.clientWidth, behavior: 'smooth' });
                  }
                }}>
                <IconChevronLeft size={18} stroke={2} />
              </Box>
            )}
          </Transition>

          <Tabs.List
            ref={ref}
            className={classes.tabList}
            px="4px"
            mx={isScroll ? '32px' : undefined}
            style={{ transition: 'margin 0.4s ease' }}>
            {Array.from(componentList.current).map(([key]) => (
              <Tabs.Tab className={classes.tab} key={key} value={key} p="0">
                <Menus>
                  <Group p="8px" align="center" wrap="nowrap">
                    <IconHome size={16} stroke={2} />
                    {key}
                    手工开盘神奇
                    {key !== '/' && (
                      <CloseButton
                        component="div"
                        size="xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          componentList.current.delete(key);
                          forceUpdate();
                          if (key === pathname) {
                            nav('/');
                          }
                        }}
                      />
                    )}
                  </Group>
                </Menus>
              </Tabs.Tab>
            ))}
          </Tabs.List>
          <Transition
            mounted={isScroll}
            transition="slide-left"
            duration={400}
            timingFunction="ease">
            {(styles) => (
              <Box
                className={classes.right}
                style={styles}
                onClick={() => {
                  if (ref.current) {
                    ref.current.scrollBy({ left: ref.current.clientWidth, behavior: 'smooth' });
                  }
                }}>
                <IconChevronRight size={18} stroke={2} />
              </Box>
            )}
          </Transition>
        </Tabs>
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section p="sm">
          <MenuSearch />
        </AppShell.Section>
        <AppShell.Section grow px="md" component={ScrollArea}>
          <Nav />
        </AppShell.Section>
        <AppShell.Section>footer</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main style={{ position: 'relative' }}>
        <Tabs value={pathname}>
          {Array.from(componentList.current).map(([key, component]) => (
            <Tabs.Panel key={key} value={key}>
              <Button
                onClick={() => {
                  componentList.current.clear();
                  forceUpdate();
                }}>
                清除缓存
              </Button>
              {component}
            </Tabs.Panel>
          ))}
        </Tabs>
      </AppShell.Main>
    </AppShell>
  );
}
