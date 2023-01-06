import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarVehiculoPageRoutingModule } from './agregar-vehiculo-routing.module';

import { AgregarVehiculoPage } from './agregar-vehiculo.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarVehiculoPageRoutingModule,
    SharedModule,
    PipesModule
  ],
  declarations: [AgregarVehiculoPage]
})
export class AgregarVehiculoPageModule {}
