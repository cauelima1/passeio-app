import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateModule } from './template/template-module';
import { Landingpage } from './landingpage/landingpage';
import { authGuard } from './auth-guard';

const routes: Routes = [
  {
    path: '',
    component: Landingpage
  },
  {
    path: 'paginas',
    loadChildren:() => import('./template/template-module').then(m => TemplateModule),
    canActivate: [ authGuard ]
  } 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
