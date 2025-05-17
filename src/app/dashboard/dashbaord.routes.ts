import { Routes } from '@angular/router';

export default [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () => import('./layouts/layout/layout.component'),
    children: [
      {
        path: 'users',
        title: 'Usuarios',
        loadChildren: () => import('./pages/users/user.routes'),
      },
      {
        path: '',
        title: 'Dashboard',
        redirectTo: 'users',
        pathMatch: 'full',
      },
    ],
  },
] as Routes;
