import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { AnunciosVehiculo } from '../pages/interfaces/interface';


import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, tap } from 'rxjs';
import { error, log } from 'console';
import  firebase  from "firebase/compat/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage"
import 'firebase/compat/storage'


@Pipe({
  name: 'imgVehiculos',

})
export class ImgVehiculosPipe implements PipeTransform {

  urlsss : any[] = []
  
  transform(vehiculo:  AnunciosVehiculo, numeroimagen: string | undefined): any {
    
    
    if ( !vehiculo.alt_img1  ) {
      
      async function getUrlImages() {
          const storage = getStorage();
          // const starsRef = ref(storage, `imagenes/vehiculos/arnold`);
          const starsRef = ref(storage, `imagenes/vehiculos/${vehiculo.usuario}/${vehiculo.nombreAnuncio}`);
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
                             
                vehiculo.alt_img1 = urlss[0]
                vehiculo.alt_img2 = urlss[1]
                vehiculo.alt_img3 = urlss[2]
                vehiculo.alt_img4 = urlss[3]
                vehiculo.alt_img5 = urlss[4]
                
                return urlss  
      }
 
         
               
        getUrlImages()
                
    }else if( vehiculo.alt_img1 ){
    return [vehiculo.alt_img1, vehiculo.alt_img2, vehiculo.alt_img3, vehiculo.alt_img4, vehiculo.alt_img5];  
    } else {
             
      return `./assets/no-image.jpg`
             
    } ;
  }
      // vehiculos/imagenes/ernes/ernesdcdcdcd1684524133740/ dddd1684524133740 1684524133764

 




}
