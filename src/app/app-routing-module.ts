import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './template/layout/layout';
import { TemplateModule } from './template/template-module';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./template/template-module').then(m => TemplateModule)
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
