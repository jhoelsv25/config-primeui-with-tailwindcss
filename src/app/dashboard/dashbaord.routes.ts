import { Routes } from '@angular/router';

export default [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () => import('./layouts/layout/layout.component'),
    children: [
      /* {
        path: 'users',
        title: 'Usuarios',
        loadChildren: () => import('../users/user.routes'),
      }, */
    ],
  },
] as Routes;
