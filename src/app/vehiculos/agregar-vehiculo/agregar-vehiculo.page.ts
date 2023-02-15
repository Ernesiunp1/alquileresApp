import { Component, OnInit } from '@angular/core';
import { AnunciosVehiculo } from 'src/app/pages/interfaces/interface';
import { VehiculosService } from 'src/app/services/vehiculos.service';

import { v4 as uuidv4 } from 'uuid'
import { Usuario } from '../../pages/interfaces/interface';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.page.html',
  styleUrls: ['./agregar-vehiculo.page.scss'],
})
export class AgregarVehiculoPage implements OnInit {

  imagenes: any[] = []
  bandera: boolean = false

  //reader = new FileReader()
  
  vehiculo: AnunciosVehiculo = {

    id:            uuidv4(),
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



arregloImagenes: any[] = []
archivosB64: any[] = []
archivos:any[] = []


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

  // this.vehiculosService.subirImagen( this.vehiculo.usuario!,  `${this.vehiculo.usuario!}`,
  //                                      `${this.vehiculo.marca}${this.vehiculo.modelo}${this.vehiculo.id}`, 'this.reader.result' )
  //                                      .then(urlImage => console.log(urlImage))
  // //   .then(resp => console.log(resp)
     
}


// async cargarImagen(evento: any){

//   const archivos = evento.target.files
//   for (let i = 0; i < archivos.length; i++) {
 
//     const reader = new FileReader()
  
//     reader.readAsDataURL(archivos[0])
//     reader.onloadend = () => {
//       console.log( evento.target.files[0].name )
//       this.imagenes.push(reader.result)
//       console.log(this.imagenes.length);
      
//       //this.imagenes.push(evento.target.files[0].name )
          
//       this.vehiculosService.subirImagen( `${this.vehiculo.usuario!}${this.vehiculo.id}`, `${this.vehiculo.usuario!}${Date.now()}`, reader.result )
//       .then(resp => console.log(resp) )
   

    
//     }


//   } 
  
  

// }



      

    // Función para convertir un archivo a Base64
    convertFileToBase64(file: any) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }

    // Función para manejar el evento change del input tipo file
    async  handleFileInputChange(event: any) {
      const files = event.target.files;
      const base64Files = [];
      for (const file of files) {
        const base64 = await this.convertFileToBase64(file);
        base64Files.push(base64);
        this.archivosB64 = base64Files
      }
      console.log(this.archivosB64);
    }




    subirImagen(formulario: any){
      
      if (!formulario.valid ) {
        return
      } 


      const nombreAnuncio= `${this.vehiculo.usuario}${this.vehiculo.marca}${Date.now()}`
      const nombreImagen = ` ${this.vehiculo.modelo}${Date.now()} `
      const usuario = this.vehiculo.usuario!


      this.archivosB64.forEach(element => {
        console.log(element);
        this.vehiculosService.subirImagen(usuario, nombreAnuncio, nombreImagen, element)
        
      });
  
    }



}