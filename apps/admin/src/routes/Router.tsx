import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { Loading, NotFound, RootErrorBoundary } from '@/components/FallbackElements';
import { Admin } from '@/layouts/Admin/';
import { HomePage } from '@/pages/Home.page';

const a: RouteObject = {
  path: '/',
  element: <Admin />,
  children: [
    {
      index: true,
      element: <HomePage />,
      hydrateFallbackElement: <Loading />,
    },
    {
      path: 'a',
      lazy: () => import('./a'),
      hydrateFallbackElement: <Loading />,
    },
    {
      path: 'b',
      lazy: () => import('./a'),
      hydrateFallbackElement: <Loading />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  hydrateFallbackElement: <Loading />,
  errorElement: <RootErrorBoundary />,
};

const router = createBrowserRouter([a], {
  future: {
    // v7_partialHydration: true,
    // v7_fetcherPersist: true,
    // v7_normalizeFormMethod: true,
    // v7_relativeSplatPath: true,
  },
});

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function Router() {
  return <RouterProvider router={router} />;
}
