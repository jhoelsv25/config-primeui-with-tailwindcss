import { Routes } from '@angular/router';

export default [
    {
        path: 'list',
        title: 'Lista de usuarios',
        loadComponent: () => import('./pages/user-list/user-list.component'),
    },
    {
        path: 'info/:id',
        title: 'Información de usuario',
        loadComponent: () => import('./pages/user-info/user-info.component'),
    },
    {
        path: 'upload',
        title: 'Subir usuarios',
        loadComponent: () => import('./pages/user-upload/user-upload.component'),
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
] as Routes;
