import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AnunciosInmueble, Inmueble } from '../pages/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

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
   
}
