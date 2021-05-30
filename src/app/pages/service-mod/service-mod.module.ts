import { ServiceModRoutingModule } from './service-mod-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModComponent } from './service-mod.component';



@NgModule({
  declarations: [
    ServiceModComponent
  ],
  imports: [
    ServiceModRoutingModule,
    CommonModule
  ]
})
export class ServiceModModule { }
