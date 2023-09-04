import { Component, OnInit } from '@angular/core';
import { AnunciosVehiculo, Vehiculo } from 'src/app/pages/interfaces/interface';
import { VehiculosService } from 'src/app/services/vehiculos.service';

import { v4 as uuidv4 } from 'uuid'
import { Usuario } from '../../pages/interfaces/interface';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.page.html',
  styleUrls: ['./agregar-vehiculo.page.scss'],
})
export class AgregarVehiculoPage implements OnInit {

  token = localStorage.getItem('token')
  usuario: string | null = localStorage.getItem('usuarioTurista')
  imagenes: any[] = []
  bandera: boolean = false
  userSuscription : boolean = true

  //reader = new FileReader() 
  
  vehiculo: Vehiculo = {

    // id:            uuidv4(),
    usuario:      this.usuario ,
    nombreAnuncio: `${this.usuario}${uuidv4()}`,
    region:        '',
    ciudad:        '',
    tipo_vehiculo: '',
    modelo:        '',
    marca:         '',
    anio:          0,
    puestos:       4,
    aire:          true,
    descripcion:   '',
    // facilidades:   [''],
    // email:         '',
    precio:        0,
    subscripcion:  true,
   

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


constructor( private vehiculosService: VehiculosService,
             private router: Router,
             private userService: UserService,
             private alertCtrl : AlertController ) { }

ngOnInit() {
  this.validarToken()
  this.obtenerUsuario()
}


onSubmit(){}

guardar(formulario : any){
  
  if (!formulario.valid ) {
    return
  }

  if (this.token) {
     console.log(formulario);
     this.router.navigate(['home']) ;
    this.vehiculosService.agregarVehiculo( this.vehiculo )
    .subscribe( resp => console.log( 'Resp', resp )
    
    )
  }else{
    throw new Error("NO EXIETE EL TOKEN");
  }
    

 

  // this.vehiculosService.subirImagen( this.vehiculo.usuario!,  `${this.vehiculo.usuario!}`,
  //                                      `${this.vehiculo.marca}${this.vehiculo.modelo}${this.vehiculo.id}`, 'this.reader.result' )
  //                                      .then(urlImage => console.log(urlImage))
  // //   .then(resp => console.log(resp)
     
}

validarToken(){
    if (this.token === "") {
      console.warn('NO HAY TOKEN');
      return false
    }else
     this.token = localStorage.getItem('token')
    return true
  }



  async obtenerUsuario(){
    const userId = localStorage.getItem('userid')
    this.userService.getUsuarioById(userId).subscribe(
      user => {  
       
       if (user.suscripcion == false) {
          this.userSuscription = false;         
          this.presentAlert()        
        
       }
      }
    )
  }


  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Suscripción',
      message: 'Para realizar publicaciones\n debes darte de Alta',
      buttons: ['OK']
    })

    await alert.present()
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
      // const nombreAnuncio= `${this.vehiculo.usuario}${Date.now()}`
      const nombreAnuncio= this.vehiculo.nombreAnuncio
      const nombreImagen = ` ${this.vehiculo.modelo}${Date.now()}`
      const usuario = this.vehiculo.usuario!

      this.archivosB64.forEach(element => {
        console.log(element);
        this.vehiculosService.subirImagen(usuario, nombreAnuncio, nombreImagen, element);
        
                
        
      });
  
    }



}