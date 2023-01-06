import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarInmueblePageRoutingModule } from './agregar-inmueble-routing.module';

import { AgregarInmueblePage } from './agregar-inmueble.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarInmueblePageRoutingModule,
    SharedModule,
    PipesModule
  ],
  declarations: [AgregarInmueblePage]
})
export class AgregarInmueblePageModule {}
