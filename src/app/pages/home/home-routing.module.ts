import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'services',
                loadChildren: () => import('./../services/services.module').then(m => m.ServicesModule),
            },
            {
                path: 'sadd',
                loadChildren: () => import('./../services-add/services-add.module').then(m => m.ServicesAddModule),
            },
            {
                path: 'smod',
                loadChildren: () => import('./../service-mod/service-mod.module').then(m => m.ServiceModModule),
            },
            {
                path: 'sdel',
                loadChildren: () => import('./../service-delete/service-delete.module').then(m => m.ServiceDeleteModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }