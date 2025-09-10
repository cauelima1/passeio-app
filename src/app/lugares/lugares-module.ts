import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LugaresRoutingModule } from './lugares-routing-module';
import { LugarComponent } from './lugar-component/lugar-component';



@NgModule({
  declarations: [
    LugarComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LugaresRoutingModule
  ]
})
export class LugaresModule { }
