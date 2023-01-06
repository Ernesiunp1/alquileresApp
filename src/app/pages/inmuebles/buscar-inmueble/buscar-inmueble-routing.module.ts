import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarInmueblePage } from './buscar-inmueble.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarInmueblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarInmueblePageRoutingModule {}
