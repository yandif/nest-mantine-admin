import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

function KeepAlive() {
  const componentList = useRef(new Map());
  const outLet = useOutlet();
  const { pathname } = useLocation();
  const forceUpdate = useUpdate();

  useEffect(() => {
    if (!componentList.current.has(pathname)) {
      componentList.current.set(pathname, outLet);
    }
    forceUpdate();
  }, [pathname]);

  return (
    <div>
      {Array.from(componentList.current).map(([key, component]) => (
        <div key={key} style={{ display: pathname === key ? 'block' : 'none' }}>
          {component}
        </div>
      ))}
    </div>
  );
}

export default KeepAlive;
