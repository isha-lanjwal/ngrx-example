import { Routes } from '@angular/router';
// import { AuthGuard } from "./shared/auth.guard";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        // canActivate: [AuthGuard]
    }
];
