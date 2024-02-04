import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { Loading, RootErrorBoundary } from '@/components/FallbackElements';
import { AdminLayout } from '@/layouts/AdminLayout/AdminLayout';
import { HomePage } from '@/pages/Home.page';

const a: RouteObject = {
  path: '/',
  element: <AdminLayout />,
  children: [
    {
      index: true,
      loader: () =>
        new Promise((s) => {
          setTimeout(() => s({ a: 123 }), 1000);
        }),
      element: <HomePage />,
      hydrateFallbackElement: <Loading />,
    },
    {
      path: 'b',
      loader: () =>
        new Promise((s) => {
          setTimeout(() => s({ a: 123 }), 1000);
        }),
      element: <HomePage />,
      hydrateFallbackElement: <Loading />,
    },
  ],
  hydrateFallbackElement: <Loading />,
  errorElement: <RootErrorBoundary />,
};

const router = createBrowserRouter([a], {
  future: {
    v7_partialHydration: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_relativeSplatPath: true,
  },
});

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function Router() {
  return <RouterProvider router={router} />;
}
