import { SpecComponent } from './spec.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    SpecComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [SpecComponent]
})
export class SpecModule { }
