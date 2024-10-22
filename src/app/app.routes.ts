import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '**',
        redirectTo: ''
    },
    {
        path: '',
        loadComponent: () => import('./students-table/students-table.component').then(c => c.StudentsTableComponent)
      }
];
