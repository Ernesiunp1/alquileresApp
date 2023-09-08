import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnunciosInmueble, AnunciosVehiculo, Usuario } from '../pages/interfaces/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnyPtrRecord } from 'dns';

const urlProd = environment.baseUrl

let token = localStorage.getItem('token')

const  httpOptions = {
  headers: new HttpHeaders({   
    Authorization: `Bearer ${token}`
  }) 
}

interface GenerarPreferencia {
  initPoint: string;  
}


@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  constructor( private http: HttpClient ) { }


  generarPreferencia(datosComprador: object, datosVendedor: object){

    const body = {
      datosComprador : datosComprador,
      datosVendedor: datosVendedor
    }

    console.log("formulario desde el servicio Mercadopago", body);
    // return this.http.post(`http://localhost:3000/api/auth/${id}`, formulario.value, httpOptions)
    //  return this.http.post<GenerarPreferencia>(`http://localhost:3000/api/mercadopago/generar`, body, httpOptions)
     return this.http.post<GenerarPreferencia>(`${urlProd}/mercadopago/generar`, body, httpOptions)
     
  }

  // crearPreferencia(id: string|null, formulario: any){
  //   console.log("formulario desde el servicio",formulario.value);
  //   return this.http.post(`http://localhost:3000/api/auth/${id}`, formulario.value, httpOptions)
  //   return this.http.post(`http://localhost:3000/api/auth/${id}`, formulario.value, httpOptions)
  // }
  




}
