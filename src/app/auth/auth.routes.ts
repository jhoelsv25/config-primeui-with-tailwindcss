import { Routes } from '@angular/router';

export default [
  {
    path: 'auth',
    title: 'Inicio de sesión',
    loadComponent: () => import('../auth/pages/home/home.component'),
    children: [
      {
        path: 'login',
        title: 'Iniciar sesión',
        loadComponent: () => import('../auth/pages/sing-in/sing-in.component'),
      },
      {
        path: 'forgot-password',
        title: 'Olvidé mi contraseña',
        loadComponent: () => import('../auth/pages/forgot-password/forgot-password.component'),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
] as Routes;
