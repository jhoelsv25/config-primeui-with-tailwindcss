import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashbaord.routes'),
  },
];
