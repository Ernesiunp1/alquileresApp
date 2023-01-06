import { Component, Input, OnInit } from '@angular/core';
import { AnunciosInmueble, AnunciosVehiculo, Inmueble } from 'src/app/pages/interfaces/interface';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { HttpClient } from "@angular/common/http";
import { Interface } from 'readline';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {

  @Input()  inmueble!: AnunciosInmueble  
  

  constructor( ) { }

  ngOnInit() { }


}
