import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAnuncioPage } from './detalle-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAnuncioPageRoutingModule {}
