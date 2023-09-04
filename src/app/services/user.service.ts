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


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _usuario! : Usuario

  get usuario() {
    console.log(this._usuario);
    
    return {...this._usuario}
  }
  
  constructor( private http: HttpClient ) { }


  agregarUsuario( usuario: any ): Observable<any>{
   // console.log( 'usuario: ' , usuario);
  //  return this.http.post<any>('http://localhost:3000/api/auth/register', usuario.value )
   return this.http.post<any>(`${urlProd}/auth/register`, usuario.value )
  }
      
  
  login(data: any): Observable<any>{
  
  //  console.log('data: ', data.values());
  // return this.http.post<any>('http://localhost:3000/api/auth/login', data.value, httpOptions)
  return this.http.post<any>(`${urlProd}/auth/login`, data.value)
  
  }
    
   
  obtenerTodo(){
    // return this.http.get('http://localhost:3000/api/inmuebles')
    return this.http.get(`${urlProd}/inmuebles`)
  }



  // buscar usuario por email para renovar la clave
  obtenerUsuarioEmail(email: any){ 
    
  //  return  this.http.get(`http://localhost:3000/api/auth/${email}`)
   return  this.http.get(`${urlProd}/auth/${email}`)
  
  }


  getInmueblesByUserId(id: any){
    //  return this.http.get<AnunciosInmueble[]>(`http://localhost:3000/api/inmuebles/publicaciones/${id}`)
     return this.http.get<AnunciosInmueble[]>(`${urlProd}/inmuebles/publicaciones/${id}`)
  }


  getVehiculosByUserId(id: any){
    // return this.http.get<AnunciosVehiculo[]>(`http://localhost:3000/api/vehiculos/publicaciones/${id}`)
    return this.http.get<AnunciosVehiculo[]>(`${urlProd}/vehiculos/publicaciones/${id}`)
 }


 getUsuarioById(id: any){
  // return this.http.get<Usuario>(`http://localhost:3000/api/auth/usuario/${id}`)
  return this.http.get<Usuario>(`${urlProd}/auth/usuario/${id}`)
 }

 putUsuario(id: string|null, formulario: any){
   console.log("formulario desde el servicio",formulario.value, id);
  //  return this.http.patch(`http://localhost:3000/api/auth/${id}`, formulario.value, httpOptions)
   return this.http.patch(`${urlProd}/auth/${id}`, formulario.value, httpOptions)
    
 }


 restaurarPassword(id: string | null,  formulario: any){
    console.log(" ESTE ES L FORM ", formulario)
    
    // return this.http.patch(`http://localhost:3000/api/auth?id=${id}`, formulario, )
    return this.http.patch(`${urlProd}/auth?id=${id}`, formulario, )

 }



}
