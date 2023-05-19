import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { AnunciosInmueble, AnunciosVehiculo } from '../interfaces/interface';
import { HomePageRoutingModule } from './home-routing.module';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() titulo: string = ""

  imagen: string = "./assets/fondo_celular.png"

  constructor( private menuCtrl: MenuController,
              private inmuebleService: InmueblesService,
              private vehiculoService: VehiculosService ) { }

  token: any = localStorage.getItem('token')              
  bandera: boolean = false
  inmuebles: AnunciosInmueble[] = []

  ofertas: AnunciosInmueble[] = []

  vehiculos: AnunciosVehiculo[] = []
  
  textoBuscar: string = ''

  results: string[]= ['cordoba', 'caba', 'la pampa', 'formosa', 'jujuy', 'rioja',
                     'santa rosa', 'santiago del estero', 'san juan', 'la roja', 'santa cruz']


  slidesOpt = {
    slidesPerView : 1.3,
    // freeMode : true
  }

  ngOnInit() {
    
    // INICIO DE ARREGLO DE INMUEBLES

    this.inmuebleService.getInmuebles()
    .subscribe( resp  =>  {this.inmuebles.push(...resp);
    
      for (let index = 0; index < resp.length; index++) {
        let id = resp[index].user!.id;
        if (resp[index].user!.id.includes('dfa2b9fc-8a16-4425-8ca8-e29c65e8c482')) 
          {this.ofertas.push(resp[index]) }
      }
    });

    this.vehiculoService.getVehiculos()
    .subscribe( resp => this.vehiculos.push(...resp) )

        
    

   
    
    this.temporizador();
        
     
                         
    }
                            
                          
                          
                        
    

 
//   onSearchChange(event: any){
//     return this.inmueblePorRegion.getInmueblePorRegion(event.detail.value)
//    .subscribe( inmueble  => this.inmuebles.push(...inmueble)  )
   
//  }
 
 aonSearchChange(event: any){
  this.textoBuscar = event.detail.value
  
 }

 inmuebleRegion( region: string ){
   this.textoBuscar = region

}

cargarImagen(){
  if (this.inmuebles.length > 0) {
   this.bandera= true
  }
}
   

temporizador(){
  if (this.token == null || this.token == false) {
    setTimeout( () =>{
      this.bandera = true ;
    }, 3000);
    
  } else {
    this.bandera == true;
    setTimeout( () =>{
      this.bandera = true ;
    }, 0);
    
  }
}
  
  
 
    
  
  






}
