import { Pipe, PipeTransform } from '@angular/core';
import { AnunciosInmueble } from '../pages/interfaces/interface';

@Pipe({
  name: 'imagen',
  
  
})
export class ImagenPipe implements PipeTransform {

  transform(inmueble: AnunciosInmueble, numeroimagen: number): any {
    
    if (!inmueble.id && !inmueble.alt_img1) {
      return `./assets/no-imagen.png`
    }else if( inmueble.alt_img1 ){
      return [inmueble.alt_img1, inmueble.alt_img2, inmueble.alt_img3, inmueble.alt_img4, inmueble.alt_img5];  
    } else {
      
      return `./assets/inmuebles/${inmueble.id}/${inmueble.id}${numeroimagen}.png`
    } ;

      

  }


  //src\assets\no-image.jpg
  // ./assets/inmuebles/{{inmueble.id}}/{{inmueble.id}}
}
