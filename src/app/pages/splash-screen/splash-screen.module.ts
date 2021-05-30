import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';



@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    MatIconModule,
    SplashScreenRoutingModule,
    CommonModule
  ]
})
export class SplashScreenModule { }
