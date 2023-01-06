import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnunciosVehiculo, Inmueble } from '../pages/interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient) {}


  getVehiculos(){
   return this.http.get<AnunciosVehiculo[]>('http://localhost:3000/anuncios_vehiculos')
  }

  getVehiculosId(id: string): Observable<AnunciosVehiculo>  {
    return this.http.get<AnunciosVehiculo>(`http://localhost:3000/anuncios_vehiculos/${id}`)
  }


  getVehiculoPorRegion(region : string): Observable<AnunciosVehiculo[]> {
    return this.http.get<AnunciosVehiculo[]> (`http://localhost:3000/anuncios_vehiculos?region=${region}`)
   }

   agregarVehiculo( vehiculo: AnunciosVehiculo ): Observable<Inmueble>{
    return this.http.post<Inmueble>('http://localhost:3000/anuncios_vehiculos', vehiculo)
  }
   

 
}
