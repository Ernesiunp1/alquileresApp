import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoVehiculosPageRoutingModule } from './listado-vehiculos-routing.module';

import { ListadoVehiculosPage } from './listado-vehiculos.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoVehiculosPageRoutingModule,
    SharedModule,
    PipesModule 
  ],
  declarations: [ListadoVehiculosPage]
})
export class ListadoVehiculosPageModule {}
