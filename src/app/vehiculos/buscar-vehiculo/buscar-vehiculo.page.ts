import { Component, OnInit } from '@angular/core';
import { AnunciosVehiculo } from 'src/app/pages/interfaces/interface';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.page.html',
  styleUrls: ['./buscar-vehiculo.page.scss'],
})
export class BuscarVehiculoPage implements OnInit {

  textoBuscar: string = ''
 

  results: string[]= ['cordoba', 'caba', 'santa rosa', "santiago del estero", 'sanjuan', 'la roja', 
                        'santa cruz', 'caba', 'san juan', 'la Pampa', 'tucuman',  ]

   vehiculos: AnunciosVehiculo[] = []

  constructor( private vehiculosPorRegion: VehiculosService  ) { }

  ngOnInit() {
    this.vehiculosPorRegion.getVehiculos()
    .subscribe( vehiculo  => this.vehiculos.push(...vehiculo)  )
    
  }

  onSearchChange(event: any){
     return this.vehiculosPorRegion.getVehiculoPorRegion(event.detail.value)
    .subscribe( vehiculo  => this.vehiculos.push(...vehiculo)  )
    
  }
  
  aonSearchChange(event: any){
   this.textoBuscar = event.detail.value
   
  }

  inmuebleRegion( region: string ){
    this.textoBuscar = region
     
  }



 
}
