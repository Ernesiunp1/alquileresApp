import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroBusquedaPipe } from './filtro-busqueda.pipe';
import { ImagenPipe } from './imagen.pipe';
import { ImgVehiculosPipe } from './img-vehiculos.pipe';



@NgModule({
  declarations: [
    FiltroBusquedaPipe,
    ImagenPipe,
    ImgVehiculosPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FiltroBusquedaPipe,
    ImagenPipe,
    ImgVehiculosPipe
  ]
})
export class PipesModule { }
