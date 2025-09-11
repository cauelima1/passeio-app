import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './template/layout/layout';

const routes: Routes = [
  {
    path: 'paginas',
    component: Layout,
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('./categorias/categorias-module').then(m => m.CategoriasModule),
        pathMatch: 'full'
      }, 
      {
        path: 'lugares',
        loadChildren:() => import('./lugares/lugares-module').then(m => m.LugaresModule),
        pathMatch: 'full'
      },
      {
        path: 'galeria',
        loadChildren: () => import('./galeria/galeria-module').then(m => m.GaleriaModule)
      }
    ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
