import { Pipe, PipeTransform } from '@angular/core';
import { AnunciosVehiculo } from '../pages/interfaces/interface';

@Pipe({
  name: 'imgVehiculos'
})
export class ImgVehiculosPipe implements PipeTransform {

  transform(vehiculo:  AnunciosVehiculo, numeroimagen: number): any {

    if (!vehiculo.id && !vehiculo.alt_img1) {
      return `./assets/no-imagen.png`
    }else if( vehiculo.alt_img1 ){
      return [vehiculo.alt_img1, vehiculo.alt_img2, vehiculo.alt_img3, vehiculo.alt_img4, vehiculo.alt_img5];  
    } else {
      
      return `./assets/vehiculos/${vehiculo.id}/${vehiculo.id}${numeroimagen}.png`
    } ;
  }

}
