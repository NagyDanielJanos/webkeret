import { ServiceDelRoutingModule } from './service-delete-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDeleteComponent } from './service-delete.component';




@NgModule({
  declarations: [
    ServiceDeleteComponent
  ],
  imports: [
    ServiceDelRoutingModule,
    CommonModule
  ]
})
export class ServiceDeleteModule { }
