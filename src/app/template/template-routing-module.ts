import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';


const routes: Routes = [
  {
    path: 'paginas',
    component: Layout,
    children: [
            {
        path: 'galeria',
        loadChildren: () => import ('../galeria/galeria-module').then(m => m.GaleriaModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias-module').then(m => m.CategoriasModule)
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares-module').then(m => m.LugaresModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
