import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarInmueblePageRoutingModule } from './buscar-inmueble-routing.module';

import { BuscarInmueblePage } from './buscar-inmueble.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarInmueblePageRoutingModule,
    SharedModule,
    PipesModule
  ],
  declarations: [BuscarInmueblePage]
})
export class BuscarInmueblePageModule {}
