import { MatButtonModule } from '@angular/material/button';
import { ServicesAddRoutingModule } from './services-add-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesAddComponent } from './services-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ServicesAddComponent
  ],
  imports: [
    ServicesAddRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    
  ],
  entryComponents: [ServicesAddComponent],
  exports : [ServicesAddComponent]
})
export class ServicesAddModule { }
