import { Component, OnInit } from '@angular/core';
import { AnunciosVehiculo } from 'src/app/pages/interfaces/interface';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.page.html',
  styleUrls: ['./listado-vehiculos.page.scss'],
})
export class ListadoVehiculosPage implements OnInit {

  vehiculos: AnunciosVehiculo[] = []

  constructor( private vehiculoService: VehiculosService) { }

  ngOnInit() {

    this.vehiculoService.getVehiculos()
    .subscribe( resp => this.vehiculos.push(...resp)
     )
  }




}
