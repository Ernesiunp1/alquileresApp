import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnunciosVehiculo, Inmueble, Vehiculo } from '../pages/interfaces/interface';
import { Observable } from 'rxjs';
import  firebase  from "firebase/compat/app";
import 'firebase/compat/storage'
import { environment } from 'src/environments/environment'; 
import { HttpHeaders } from '@angular/common/http';


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
export class VehiculosService implements OnInit {

  storageRef= firebase.app().storage().ref()

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.validandoToken()
  }
   

  getVehiculos(){
  //  return this.http.get<AnunciosVehiculo[]>('http://localhost:3000/anuncios_vehiculos')
   return this.http.get<AnunciosVehiculo[]>('http://localhost:3000/api/vehiculos')
  }

  getVehiculosId(id: string): Observable<AnunciosVehiculo>  {
    //return this.http.get<AnunciosVehiculo>(`http://localhost:3000/anuncios_vehiculos/${id}`)
    return this.http.get<AnunciosVehiculo>(`http://localhost:3000/api/vehiculos/${id}`)

  }


  getVehiculoPorRegion(region : string): Observable<AnunciosVehiculo[]> {
    // return this.http.get<AnunciosVehiculo[]> (`http://localhost:3000/anuncios_vehiculos?region=${region}`)
    return this.http.get<AnunciosVehiculo[]> (`http://localhost:3000/api/anuncios_vehiculos?region=${region}`)

   }

   agregarVehiculo( vehiculo: AnunciosVehiculo ): Observable<Vehiculo>{
    // return this.http.post<Inmueble>('http://localhost:3000/anuncios_vehiculos', vehiculo)
    console.log(vehiculo);    
    return this.http.post<any>('http://localhost:3000/api/vehiculos', vehiculo, httpOptions  )

  }

  validandoToken(){
    let token1 = localStorage.getItem('token')
    token = token1;
  }
   




  // async subirImagen(anuncio: string, nombreImg: string, img64: any){

  //   try {
  //     const respuesta = await this.storageRef.child(`vehiculos/aliasusuario/${anuncio}/${nombreImg}`)
  //                       .putString(img64, 'data_url')
  //     console.log(respuesta);
  //     return await respuesta.ref.getDownloadURL()
      
  //   } catch (error) {
  //     console.log(error);
  //     return null
      
  //   }

  // }
 //img64 no es lo mismo que nombre de imagen, el img64 es la foto en b64, 
 //aparte de eso debes indicar el nombre que la misma va a tener

  async subirImagen(usuario: string, anuncio: string, nombreImg: string, img64: any){
   //async subirImagen(usuario: string, anuncios: string, imagenes: any){

    try {                                           // imagenes/vehiculos/usuario/anuncios/nombredeImagen
      const respuesta = await this.storageRef
      .child(`imagenes/vehiculos/${usuario}/${anuncio}/${nombreImg}${Date.now()}`)
                        .putString(img64, 'data_url')
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL()
      
    } catch (error) {
      console.log(error);
      return null
      
    }

  } 



}
