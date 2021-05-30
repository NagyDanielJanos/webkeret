import { ServiceDeleteComponent } from './service-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ServiceDeleteComponent,
        data: { title: 'ServicesDel' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServiceDelRoutingModule { }