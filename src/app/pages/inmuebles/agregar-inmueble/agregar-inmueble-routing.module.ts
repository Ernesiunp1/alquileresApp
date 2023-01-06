import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarInmueblePage } from './agregar-inmueble.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarInmueblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarInmueblePageRoutingModule {}
