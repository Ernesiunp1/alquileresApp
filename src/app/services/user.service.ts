import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../pages/interfaces/interface';
import { Observable } from 'rxjs';

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
   return this.http.post<any>('http://localhost:3000/api/auth/register', usuario.value )
  }
      
  
  login(data: any): Observable<any>{
  
  //  console.log('data: ', data.values());
  return this.http.post<any>('http://localhost:3000/api/auth/login', data.value)
  
  }
    
   
  obtenerTodo(){
    return this.http.get('http://localhost:3000/api/inmuebles')
  }


}
