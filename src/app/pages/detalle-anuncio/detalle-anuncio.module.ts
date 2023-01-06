import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAnuncioPageRoutingModule } from './detalle-anuncio-routing.module';

import { DetalleAnuncioPage } from './detalle-anuncio.page';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAnuncioPageRoutingModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    PipesModule
  ],
  declarations: [DetalleAnuncioPage]
})
export class DetalleAnuncioPageModule {}
