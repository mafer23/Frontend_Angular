import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./components/form/form.component'),
    },
    {
        path:'',
        redirectTo:'/components',
        pathMatch:'full'
    }
];
