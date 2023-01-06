import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonMenuComponent } from './boton-menu/boton-menu.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { PipesModule } from '../pipes/pipes.module';
import { TarjetaVehiculoComponent } from './tarjeta-vehiculo/tarjeta-vehiculo.component';



@NgModule({
  declarations: [
    BotonMenuComponent,
    TarjetaComponent,
    TarjetaVehiculoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    RouterModule,
    BotonMenuComponent,
    TarjetaComponent,
    TarjetaVehiculoComponent
  ]
})
export class SharedModule { }
