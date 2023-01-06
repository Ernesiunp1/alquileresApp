import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { switchMap } from 'rxjs';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { AnunciosInmueble } from '../interfaces/interface';

@Component({
  selector: 'app-detalle-anuncio',
  templateUrl: './detalle-anuncio.page.html',
  styleUrls: ['./detalle-anuncio.page.scss'],
})
export class DetalleAnuncioPage implements OnInit {

inmueble!: AnunciosInmueble | undefined
 
facilidades: string[] | undefined  = []                         

  constructor( private activatedRoute: ActivatedRoute,
               private inmuebleService: InmueblesService  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.inmuebleService.getInmueblePorId(id))
      ).subscribe( inmueble => this.inmueble= inmueble)
      
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.inmuebleService.getInmueblePorId(id))
      ).subscribe(  facilidadesInmuebles => this.facilidades = facilidadesInmuebles.facilidades  )  
       
    //subscribe( id => console.log(id) )
  }

  onClick(){
    
  }
  

}
