import { Component } from '@angular/core';
import { Navigation, Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
}) 
export class AppComponent { 
  public appPages = [
    { title: 'Home',                 url: 'home',               icon: 'home' },
    { title: 'Listado de Inmuebles', url: 'listado',            icon: 'business' },
    { title: 'Buscar Inmueble',      url: 'buscar-inmueble',    icon: 'search' },
    { title: 'Agregar Inmueble',     url: 'agregar-inmueble',   icon: 'add' },
    { title: 'Listado Vehiculos',    url: 'listado-vehiculos',  icon: 'car' },
    { title: 'Buscar Vehiculos',     url: 'buscar-vehiculo',    icon: 'search' },
    { title: 'Agregar Vehiculo',     url: 'agregar-vehiculo',   icon: 'add' },
    { title: 'Ofertas',              url: 'ofertas',            icon: 'ticket' },
    
    // { title: 'Login',                url: 'auth/login',         icon: 'person' },
    { title: 'LogOut',               url: 'auth/login',         icon: 'log-out' },
    // { title: 'Register',             url: 'auth/register',      icon: 'file-tray-full' },
    { title: 'Mi Perfil',            url: 'mi-perfil',          icon: 'person-circle' },
    // { title: 'Suscripción',          url: 'pagos',              icon: 'ticket' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor( private activateRouter: ActivatedRoute,
                ) {

   this.activateRouter.params.subscribe(id => {console.log( {id} );
   })

   
  }



  


  

}
