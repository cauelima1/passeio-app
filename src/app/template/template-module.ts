import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing-module';
import { Layout } from './layout/layout';
import { CategoriasModule } from '../categorias/categorias-module';


@NgModule({
  declarations: [
    Layout
  ],
  imports: [ 
    CategoriasModule,
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
