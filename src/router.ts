import { createBrowserRouter, redirect } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('@/layouts/root'),
    children: [
      {
        index: true,
        loader: () => redirect('/dashboard')
      },
      {
        lazy: () => import('@/layouts/auth'),
        children: [
          {
            path: 'login',
            lazy: () => import('@/pages/auth/login')
          },
        ]
      },
      {
        lazy: () => import('@/layouts/protected'),
        children: [
          {
            path: 'dashboard',
            lazy: () => import('@/layouts/protected.dashboard'),
            children: [
              {
                index: true,
                loader: () => redirect('/dashboard/summary')
              },
              {
                path: 'summary',
                lazy: () => import('@/pages/dashboard/summary')
              },
              {
                path: 'admins',
                lazy: () => import('@/pages/dashboard/admins'),
              },
              {
                path: 'users',
                children: [
                  {
                    index: true,
                    lazy: () => import('@/pages/dashboard/users'),
                  },
                  {
                    path: ':id',
                    lazy: () => import('@/pages/dashboard/users/detail'),
                  }
                ]
              },

              {
                path: '*',
                loader: () => redirect('/dashboard'),
              },
            ]
          },
          {
            path: 'profile',
            lazy: () => import('@/layouts/protected.profile'),
            children: [
              {
                index: true,
                loader: () => redirect('/profile/info')
              },
              {
                path: 'password',
                lazy: () => import('@/pages/profile/password'),
              },
              {
                path: '*',
                loader: () => redirect('/profile'),
              },
            ]
          },
        ]
      },
    ],
  },
  {
    path: '*',
    lazy: () => import('@/pages/errors/404')
  },
]);

export default router;
