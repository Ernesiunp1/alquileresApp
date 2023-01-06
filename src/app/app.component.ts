import { Component } from '@angular/core';
import { Navigation, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home',                 url: 'home',             icon: 'home' },
    { title: 'Listado de Inmuebles', url: 'listado',          icon: 'business' },
    { title: 'Buscar Inmueble',      url: 'buscar-inmueble',  icon: 'search' },
    { title: 'Agregar Inmueble',     url: 'agregar-inmueble', icon: 'add' },
    { title: 'Listado Vehiculos',    url: 'listado-vehiculos',icon: 'car' },
    { title: 'Buscar Vehiculos',     url: 'buscar-vehiculo',  icon: 'search' },
    { title: 'Agregar Vehiculo',     url: 'agregar-vehiculo', icon: 'add' },
    { title: 'Listado',              url: 'listado',          icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor( private activateRouter: ActivatedRoute ) {

   this.activateRouter.params.subscribe(id => {console.log( {id} );
   })

  }


  

}
