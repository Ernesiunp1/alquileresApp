import { Component, OnInit } from '@angular/core';
import { AnunciosInmueble,} from '../../interfaces/interface';

import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-agregar-inmueble',
  templateUrl: './agregar-inmueble.page.html',
  styleUrls: ['./agregar-inmueble.page.scss'],
})
export class AgregarInmueblePage implements OnInit {

  inmueble: AnunciosInmueble = {
      /// id: 'caraban-apto',
    usuario:         '',
    region:          '',
    ciudad:          '',
    nombre_inmueble: '',
    email:           '',
    telefono:       +54,
    habitaciones:     1,
    amoblado:       true,
    banos:            1,
    precio:           0,
    tipo_inmuebles:  [],
    facilidades:     [],
    descripcion:     '',
    alt_img1:        '',
    alt_img2:        '',
    alt_img3:        '',
    alt_img4:        '',
    alt_img5:        '',
  
  }

  

  valores=[
    {  name: 'Cocina',        selected: false },
    {  name:"Internet",       selected: false },
    {  name: "Piscina",       selected: false },
    {  name: "Televisor",     selected: false },
    {  name: "Gym",           selected: false },
    {  name: "Plancha",       selected: false },
    {  name:  "A/C",          selected: false },
    {  name: "Jacuzzi",       selected: false },
    {  name: "Agua Caliente", selected: false },
    
  ]

  tipo_inmueble= [
    {  tipo: 'Apto',           selected: false },
    {  tipo: 'Casa',           selected: false },
    {  tipo: 'Hotel',          selected: false },
    {  tipo: 'Mono ambiente',  selected: false },
    {  tipo: 'Cabaña',         selected: false },
    {  tipo: 'Apto',           selected: false },
    {  tipo: 'Edf',           selected: false },

  ]


  constructor( private inmuebleService: InmueblesService ) { }

  ngOnInit() {}


  onSubmit(){}

  guardar(formulario : any){
    
    if (!formulario.valid ) {
      return
    }
    console.log(formulario);
    this.inmuebleService.agregarInmueble( this.inmueble )
    .subscribe( resp => console.log( 'Resp', resp )
     )
       
  }

  facilidades( check: any ) {

    if (check.selected == true) {
      this.inmueble.facilidades!.push(check.name)
    }
    
    let index = this.inmueble.facilidades!.indexOf(check.name)
     
    if (check.selected == false) {
      this.inmueble.facilidades!.splice( index! ,  1)
    }
   
  }


  tipoInmueble( check: any ) {
    if (check.selected === true) {
      this.inmueble.tipo_inmuebles?.push(check.tipo)
    }
      
    let index = this.inmueble.tipo_inmuebles?.indexOf(check.tipo)
    console.log( index );

    if (check.selected == false) {
      this.inmueble.tipo_inmuebles!.splice( index! ,  1)
    }

  }

}
