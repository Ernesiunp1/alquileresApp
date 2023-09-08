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
  vehiculo!: AnunciosVehiculo | undefined;

  facilidades: string[] | undefined = [];
  idVendedor: string = '';
  banderaBotonBorrar: boolean = false;
  idVehiculo: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private vehiculoService: VehiculosService
  ) {}

  ngOnInit() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.vehiculoService.getVehiculosId(id)))
      .subscribe((vehiculo) => {
        this.idVendedor = vehiculo.user!.id;

        this.vehiculo = vehiculo;

        this.idVehiculo = vehiculo.id;

        this.mostrarBotonBorrar(this.idVendedor);
      });
  }

  onClick() {} 

  mostrarBotonBorrar(idVendedor: string) {
    const idUsuario = localStorage.getItem('userid');
    if (idVendedor === idUsuario) {
      this.banderaBotonBorrar = true;
    } else {
      console.log('Los Id son diferentes');
    }
  }

  borrarVehiculo(idVehiculo: string) {
    const BorrarVehiculo = this.vehiculoService
      .borrarVehiculo(idVehiculo)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
