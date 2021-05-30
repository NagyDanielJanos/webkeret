import { ServicesAddComponent } from './services-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ServicesAddComponent,
        data: { title: 'ServicesAdd' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServicesAddRoutingModule { }