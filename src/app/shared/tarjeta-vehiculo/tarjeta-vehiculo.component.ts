import { Component, OnInit, Input } from '@angular/core';
import { AnunciosVehiculo } from 'src/app/pages/interfaces/interface';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-tarjeta-vehiculo',
  templateUrl: './tarjeta-vehiculo.component.html',
  styleUrls: ['./tarjeta-vehiculo.component.scss'],
})
export class TarjetaVehiculoComponent implements OnInit {


  @Input() vehiculo!: AnunciosVehiculo
  
  constructor() { }

  ngOnInit() {}

}
