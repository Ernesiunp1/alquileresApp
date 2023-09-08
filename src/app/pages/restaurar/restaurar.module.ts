import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurarPageRoutingModule } from './restaurar-routing.module';

import { RestaurarPage } from './restaurar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurarPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [RestaurarPage]
})
export class RestaurarPageModule {}
