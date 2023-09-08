import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { AnunciosInmueble, AnunciosVehiculo } from '../interfaces/interface';
import { HomePageRoutingModule } from './home-routing.module';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { Router } from '@angular/router';

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
              private vehiculoService: VehiculosService,
              private router: Router ) { }



  token: any = localStorage.getItem('token')              
  bandera: boolean = false
  inmuebles: AnunciosInmueble[] = [] 

  ofertas: AnunciosInmueble[] = []

  vehiculos: AnunciosVehiculo[] = []
  
  textoBuscar: string = ''

  banderatoken: Boolean = false

  results: string[]= ['cordoba', 'caba', 'la pampa', 'formosa', 'jujuy', 'rioja',
                     'santa rosa', 'santiago del estero', 'san juan', 'la roja', 'santa cruz']

// prueba islides
// @ViewChild('slides', { static: false }) slides?: IonSlides;

@ViewChild('slides1', { static: false }) slides1?: IonSlides;
@ViewChild('slides2', { static: false }) slides2?: IonSlides;
@ViewChild('slides3', { static: false }) slides3?: IonSlides;

onSlidesDidLoad() {
  this.adjustSlidesPerView();
  window.addEventListener('resize', () => {
    this.adjustSlidesPerView();
  });
}

adjustSlidesPerView() {
  const screenWidth = window.innerWidth;
  let slidesPerView = 5.3; // Número inicial de diapositivas

  if (screenWidth <= 500) {
    slidesPerView = 1.5; 
  } else if (screenWidth <= 700) {
    slidesPerView = 2.5; 
  }else if (screenWidth <= 850) {
    slidesPerView = 3.2; 
  }else if (screenWidth <= 1024) {
    slidesPerView = 4.2;
  } else if (screenWidth <= 1200) {
    slidesPerView = 4.5;
  }

  // this.slides!.options = { slidesPerView: slidesPerView };
  // this.slides!.update();

  if (this.slides1) {
    this.slides1.options = { slidesPerView: slidesPerView };
    this.slides1.update();
  }

  if (this.slides2) {
    this.slides2.options = { slidesPerView: slidesPerView };
    this.slides2.update();
  }

  if (this.slides3) {
    this.slides3.options = { slidesPerView: slidesPerView };
    this.slides3.update();
  }

}

// prueba ion slides
  // slidesOpt = {
  //   slidesPerView : 5,
    
  //   // freeMode : true
  // }

  ngOnInit() {
    
    // this.refreshPage() 
    // INICIO DE ARREGLO DE INMUEBLES

    this.inmuebleService.getInmuebles()
    .subscribe( resp  =>  {this.inmuebles.push(...resp);
    
      for (let index = 0; index < resp.length; index++) {
        let id = resp[index].user!.id;
        if (resp[index].user!.id.includes('68af078c-681b-414b-9eb4-85d57766cc0b')) 
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
  
  
 
    
  
refreshPage() {
  if(this.banderatoken == false)
  window.location.reload();
  this.banderatoken = true
}


navegar(){
  this.router.navigate(['buscar-inmueble'])
}



}
