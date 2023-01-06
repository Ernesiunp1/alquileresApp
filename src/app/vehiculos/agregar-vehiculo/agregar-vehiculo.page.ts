import { Component, OnInit } from '@angular/core';
import { AnunciosVehiculo } from 'src/app/pages/interfaces/interface';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.page.html',
  styleUrls: ['./agregar-vehiculo.page.scss'],
})
export class AgregarVehiculoPage implements OnInit {

  vehiculo: AnunciosVehiculo = {

    id:            '',
    usuario:       '',
    region:        '',
    ciudad:        '',
    tipo_vehiculo: '',
    anio:          0,
    marca:         '',
    modelo:        '',
    puestos:       4,
    aire:          true,
    descripcion:   '',
    facilidades:   [''],
    email:         '',
    precio:        0,
    subscripcion:  true,
    alt_img1:      '',
    alt_img2:      '',
    alt_img3:      '',
    alt_img4:      '',
    alt_img5:      '',

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


constructor( private vehiculosService: VehiculosService ) { }

ngOnInit() {}


onSubmit(){}

guardar(formulario : any){
  
  if (!formulario.valid ) {
    return
  }
  console.log(formulario);
  this.vehiculosService.agregarVehiculo( this.vehiculo )
  .subscribe( resp => console.log( 'Resp', resp )
   )
     
}

/*facilidades( check: any ) {

  if (check.selected == true) {
    this.inmueble.facilidades!.push(check.name)
  }
  
  let index = this.inmueble.facilidades!.indexOf(check.name)
   
  if (check.selected == false) {
    this.inmueble.facilidades!.splice( index! ,  1)
  }
 
}*/


/*tipoInmueble( check: any ) {
  if (check.selected === true) {
    this.inmueble.tipo_inmuebles?.push(check.tipo)
  }
    
  let index = this.inmueble.tipo_inmuebles?.indexOf(check.tipo)
  console.log( index );

  if (check.selected == false) {
    this.inmueble.tipo_inmuebles!.splice( index! ,  1)
  }

}*/

}


 


