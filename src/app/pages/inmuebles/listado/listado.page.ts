import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';

import { AnunciosInmueble, Inmueble } from '../../interfaces/interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  constructor( private inmuebleService: InmueblesService ) { }

  inmuebles: AnunciosInmueble[] = []

  
 

  ngOnInit() {
      
      this.inmuebleService.getInmuebles()
      .subscribe( resp  =>  this.inmuebles.push(...resp) )
  }
     
  onClick(){

  }



}
