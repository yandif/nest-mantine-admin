import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/Home.page';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
