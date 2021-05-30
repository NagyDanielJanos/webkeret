
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SpecModule } from './spec/spec.module';


@NgModule({
  declarations: [
  
    ServicesComponent
  ],
  imports: [
    SpecModule,
    ServicesRoutingModule,
    MatCardModule,
    CommonModule
  ],
  exports: [ServicesComponent]

})
export class ServicesModule { }
