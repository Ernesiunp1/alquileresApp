import { Component, OnInit } from '@angular/core';
import { AnunciosInmueble, Inmueble,} from '../../interfaces/interface';

import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-agregar-inmueble',
  templateUrl: './agregar-inmueble.page.html',
  styleUrls: ['./agregar-inmueble.page.scss'],
})

export class AgregarInmueblePage implements OnInit { 
  

  token = localStorage.getItem('token');

  usuario: string | null = localStorage.getItem('usuarioTurista')
  

  inmueble: AnunciosInmueble = {
      /// id: 'caraban-apto', 
    usuario:         this.usuario,
    nombreAnuncio:    'universal',
    region:          '',
    ciudad:          '',
    nombre_inmueble: '',
    //email:          '',
   // telefono:       +54,
    habitaciones:     1,
    amoblado:       true,
    banos:            1,
    precio:           0,
    tipo_inmuebles:  [],
    facilidades:     [],
    descripcion:     '',
    suscripcion:     true,
    //alt_img1:        '',
    // alt_img2:        '',
    // alt_img3:        '',
    // alt_img4:        '',
    // alt_img5:        '',
  
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
 

  constructor( private inmuebleService: InmueblesService ) { }

  ngOnInit() {
    this.validarToken()
  }


  onSubmit(){}

  guardar(formulario : any){
    
    
    if (!formulario.valid ) {
      return
    }
    if (this.token ) {
      console.log(formulario);
      this.inmuebleService.agregarInmueble( this.inmueble )
      .subscribe( resp => console.log( 'Resp', resp )
      )
    }else{
      throw new Error("NO EXISTE TOKEN!!!!!");
      
    }
    
       
  }

  validarToken(){
    if (this.token === "") {
      console.warn('NO HAY TOKEN');
      return false
    }else
     this.token = localStorage.getItem('token')
    return true
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

    const nombreAnuncio= `${this.inmueble.usuario?.toLocaleLowerCase().split(" ").join("") }${this.inmueble.nombre_inmueble?.toLocaleLowerCase().trim()} `
    const nombreImagen = ` ${this.inmueble.nombre_inmueble?.toLocaleLowerCase().split(" ").join("")}${Date.now()} `
    const usuario = `${this.inmueble.usuario?.toLocaleLowerCase().split(" ").join("")  }  `

    this.archivosB64.forEach(element => {
      console.log(element);
      this.inmuebleService.subirImagen( usuario, nombreAnuncio, nombreImagen, element)
      
    });
      

  }









}
