import { Pipe, PipeTransform } from '@angular/core';
import { AnunciosInmueble } from '../pages/interfaces/interface';


import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, tap } from 'rxjs';
import { error, log } from 'console';
import  firebase  from "firebase/compat/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage"
import 'firebase/compat/storage'

@Pipe({
  name: 'imagen',
    
})
export class ImagenPipe implements PipeTransform {

  transform(inmueble: AnunciosInmueble, imgInmueble: string | undefined): any {
    
    if (!inmueble.alt_img1) {
      // return `./assets/no-imagen.png`

      async function getUrlImages() {
        const storage = getStorage();
        // const starsRef = ref(storage, `imagenes/vehiculos/arnold`);
        const starsRef = ref(storage, `imagenes/inmuebles/${inmueble.usuario}/${inmueble.nombreAnuncio}`);
        let urlss: string[] = []

        const elementos = await listAll(starsRef)
        for ( let imagen of elementos.items ){
           let urls = await getDownloadURL(imagen)
           urlss.push(urls)           
          //  console.log(urls);
        }
              // console.log('hola', urlss);
              // console.log(vehiculo.usuario);
              // console.log(vehiculo.nombreAnuncio);                
                           
              inmueble.alt_img1 = urlss[0]
              inmueble.alt_img2 = urlss[1]
              inmueble.alt_img3 = urlss[2]
              inmueble.alt_img4 = urlss[3]
              inmueble.alt_img5 = urlss[4]
              
              return urlss  
    }
      
             
      getUrlImages()

    }else if( inmueble.alt_img1 ){
      return [inmueble.alt_img1, inmueble.alt_img2, inmueble.alt_img3, inmueble.alt_img4, inmueble.alt_img5];  
    } else {
      
      // return `./assets/inmuebles/${inmueble.id}/${inmueble.id}${numeroimagen}.png`
    } ;

      

  }


  //src\assets\no-image.jpg
  // ./assets/inmuebles/{{inmueble.id}}/{{inmueble.id}}
}
