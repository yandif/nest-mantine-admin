import { Card, Input, Tabs } from '@mantine/core';
import KeepAlive, { KeepAliveRef, useOnActive } from 'keepalive-for-react';
import { useMemo, useRef, useState } from 'react';

function KeepAliveDemo() {
  const keepAliveRef = useRef<KeepAliveRef>(null);
  const [activeName, setActiveName] = useState('TabA');
  const showTabs = [
    {
      name: 'TabA',
      component: TabA,
      cache: true,
    },
    {
      name: 'TabB',
      component: TabB,
      cache: false,
    },
  ];

  const currentTab = useMemo(
    () => showTabs.find((item) => item.name === activeName)!,
    [activeName],
  );

  const clearAllCache = () => {
    keepAliveRef.current?.cleanAllCache();
  };

  const getCaches = () => {
    console.log(keepAliveRef.current?.getCaches());
  };

  const removeCache = () => {
    keepAliveRef.current?.removeCache('TabA');
  };

  const cleanOtherCache = () => {
    keepAliveRef.current?.cleanOtherCache();
  };

  return (
    <Card title="KeepAliveDemo (无Router示例)">
      <Tabs
        value={activeName}
        onChange={(activeKey) => {
          setActiveName(activeKey!);
        }}>
        <Tabs.List>
          {showTabs.map((item) => (
            <Tabs.Tab key={item.name} value={item.name}>
              {item.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      <KeepAlive aliveRef={keepAliveRef} activeName={activeName} cache={currentTab.cache}>
        <currentTab.component />
      </KeepAlive>
    </Card>
  );
}

function TabA() {
  const domRef = useOnActive(() => {
    console.log('TabA onActive'); // this will be trigger when tabA is active
  });
  return (
    <div ref={domRef}>
      <h1 className="py-[15px] font-bold">TabA cached</h1>
      <Input placeholder="输入一个值 然后切换tab组件不会被销毁"></Input>
    </div>
  );
}

function TabB() {
  const domRef = useOnActive(() => {
    console.log('TabB onActive'); // no cache won't trigger onActive
  });
  return (
    <div ref={domRef}>
      <h1 className="py-[15px] font-bold">TabB nocache</h1>
      <Input placeholder="输入一个值 然后切换tab组件会被销毁"></Input>
    </div>
  );
}

export default KeepAliveDemo;
