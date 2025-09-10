import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugarComponent } from './lugar-component/lugar-component';

const routes: Routes = [
  {
    path: '',
    component: LugarComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugaresRoutingModule { }
