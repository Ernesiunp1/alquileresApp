import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AnunciosInmueble, Inmueble } from '../pages/interfaces/interface';

import { environment } from '../../environments/environment';
import  firebase  from "firebase/compat/app";


import 'firebase/compat/storage';

let token = localStorage.getItem('token')

const  httpOptions = {
  headers: new HttpHeaders({   
    Authorization: `Bearer ${token}`
  })
}

firebase.initializeApp(environment.firebaseConfig) 

@Injectable({
  providedIn: 'root'
})



export class InmueblesService implements OnInit{

  storageRef = firebase.app().storage().ref()

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.validandoToken()
  }


  getInmuebles(){
  //  return this.http.get<AnunciosInmueble[]> ('http://localhost:3000/anuncios_inmuebles')
   return this.http.get<AnunciosInmueble[]> ('http://localhost:3000/api/inmuebles')
  }
 
  getInmueblePorId(id : string): Observable<AnunciosInmueble> {
    // return this.http.get<AnunciosInmueble> (`http://localhost:3000/anuncios_inmuebles/${id}`)
    return this.http.get<AnunciosInmueble> (`http://localhost:3000/api/inmuebles/${id}`)
   }
  
   getInmueblePorRegion(region : string): Observable<AnunciosInmueble[]> {
    // return this.http.get<AnunciosInmueble[]> (`http://localhost:3000/anuncios_inmuebles?region=${region}`)
    return this.http.get<AnunciosInmueble[]> (`http://localhost:3000/api/inmuebles?region=${region}`)
   }

   
  agregarInmueble( inmueble: AnunciosInmueble ): Observable<Inmueble>{
    console.log(inmueble);
    return this.http.post<Inmueble>('http://localhost:3000/api/inmuebles', inmueble , httpOptions )
    // return this.http.post<Inmueble>('http://localhost:3000/anuncios_inmuebles', inmueble)
  }
   
    

  validandoToken(){
    let token1 = localStorage.getItem('token')
    token = token1
 
  }


     

  async subirImagen(usuario: string, anuncio: string, nombreImg: string, img64: any){

    try {
      const respuesta = await this.storageRef.child(`imagenes/inmuebles/${usuario}/${anuncio}/${nombreImg}${Date.now()}`)
                        .putString(img64, 'data_url')
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL()
      
    } catch (error) {
      console.log(error);
      return null
      
    }

  }





}
