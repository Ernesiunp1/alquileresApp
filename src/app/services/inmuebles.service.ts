import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AnunciosInmueble, Inmueble } from '../pages/interfaces/interface';

import { environment } from '../../environments/environment';
import  firebase  from "firebase/compat/app";


import 'firebase/compat/storage';

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})



export class InmueblesService {

  storageRef = firebase.app().storage().ref()

  constructor(private http: HttpClient) {}


  getInmuebles(){
   return this.http.get<AnunciosInmueble[]> ('http://localhost:3000/anuncios_inmuebles')
  }
 
  getInmueblePorId(id : string): Observable<AnunciosInmueble> {
    return this.http.get<AnunciosInmueble> (`http://localhost:3000/anuncios_inmuebles/${id}`)
   }
  
   getInmueblePorRegion(region : string): Observable<AnunciosInmueble[]> {
    return this.http.get<AnunciosInmueble[]> (`http://localhost:3000/anuncios_inmuebles?region=${region}`)
   }

   
  agregarInmueble( inmueble: AnunciosInmueble ): Observable<Inmueble>{
    return this.http.post<Inmueble>('http://localhost:3000/anuncios_inmuebles', inmueble)
  }
   

  

  async subirImagen(anuncio: string, nombreImg: string, img64: any){

    try {
      const respuesta = await this.storageRef.child(`inmuebles/aliasusuario/${anuncio}/${nombreImg}${Date.now()}`)
                        .putString(img64, 'data_url')
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL()
      
    } catch (error) {
      console.log(error);
      return null
      
    }

  }





}
