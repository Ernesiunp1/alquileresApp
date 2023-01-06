import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { AnunciosVehiculo } from '../../pages/interfaces/interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.page.html',
  styleUrls: ['./detalle-vehiculo.page.scss'],
})



export class DetalleVehiculoPage implements OnInit {

  vehiculo!: AnunciosVehiculo | undefined

  facilidades: string[] | undefined= []

  constructor(private activateRoute: ActivatedRoute,
              private vehiculoService: VehiculosService) { }

  ngOnInit() {

    this.activateRoute.params.pipe(
      switchMap(({id}) => this.vehiculoService.getVehiculosId(id))
      ).subscribe( vehiculo => this.vehiculo = vehiculo  )    

  }



  onClick(){

  }





}
