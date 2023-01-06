import { Component, Input, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { AnunciosInmueble } from '../../interfaces/interface';
import { PipesModule } from 'src/app/pipes/pipes.module';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.page.html',
  styleUrls: ['./buscar-inmueble.page.scss'],
})
export class BuscarInmueblePage implements OnInit {

  textoBuscar: string = ''
 

  results: string[]= ['cordoba', 'caba', 'la pampa', 'formosa', 'jujuy', 'rioja',
                     'santa rosa', 'santiago del estero', 'san juan', 'la roja', 'santa cruz']

   inmuebles: AnunciosInmueble[] = []

  constructor( private inmueblePorRegion: InmueblesService  ) { }

  ngOnInit() {
    this.inmueblePorRegion.getInmuebles()
    .subscribe( inmueble  => this.inmuebles.push(...inmueble)  )
    
  }

  onSearchChange(event: any){
     return this.inmueblePorRegion.getInmueblePorRegion(event.detail.value)
    .subscribe( inmueble  => this.inmuebles.push(...inmueble)  )
    
  }
  
  aonSearchChange(event: any){
   this.textoBuscar = event.detail.value
   
  }

  inmuebleRegion( region: string ){
    this.textoBuscar = region
     
  }



 
}
