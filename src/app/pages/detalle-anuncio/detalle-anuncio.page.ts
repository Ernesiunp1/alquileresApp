import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { switchMap } from 'rxjs';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { AnunciosInmueble } from '../interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { MercadopagoService } from 'src/app/services/mercadopago.service';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-detalle-anuncio',
  templateUrl: './detalle-anuncio.page.html',
  styleUrls: ['./detalle-anuncio.page.scss'],
})
export class DetalleAnuncioPage implements OnInit {
  inmueble!: AnunciosInmueble | undefined;

  datosComprador = {};
  datosTransaccion = [];
  dataInmueble = {};
  idVendedor: string = '';
  idOfertas = '68af078c-681b-414b-9eb4-85d57766cc0b';
  botonComprar: boolean = false;
  previousUrl : string = ""
  mostrarBorrar: boolean = false
  idInmueble: string | undefined= ""
  telefono: any
  

  facilidades: string[] | undefined = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private inmuebleService: InmueblesService,
    private userService: UserService,
    private mercadopagoService: MercadopagoService,
    private router: Router,
    private location: Location,
    private platform: Platform,
    private alertController: AlertController
  ) {}

  ngOnInit() {
   


    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.inmuebleService.getInmueblePorId(id)))
      .subscribe((inmueble) => {
        this.inmueble = inmueble;

        // PREPARANDO DATA DEL PRODUCTO Y VENDEDOR
        let dataVendedor = {
          nombreVendedor: this.inmueble.user!.nombre, 
          apellidoVendedor: this.inmueble.user!.apellido, 
          correoVendedor: this.inmueble.user!.email, 
          telefono: this.inmueble.user!.telefono,
          idInmueble: this.inmueble.id,
          idVendedor: this.inmueble.user!.id,
          nombreInmueble: this.inmueble.nombre_inmueble,
          precio: this.inmueble.precio,
          telefonoContacto: this.inmueble.telefono
        };
        // PREPARANDO DATOS DEL VENDEDOR E INMUEBLE PARA LOS HEADERS
        this.dataInmueble = dataVendedor;
        this.idVendedor = dataVendedor.idVendedor;
        this.telefono = this.inmueble.user!.telefono;
        
        

        if (dataVendedor.idVendedor == this.idOfertas) {
          this.botonComprar = true;
        } else {
          this.botonComprar = false;
        }

        this.botonBorrar(dataVendedor.idVendedor)

        this.idInmueble = dataVendedor.idInmueble

        // OBTENIENDO DATOS DEL USUARIO LOGUEADO (COMPRADOR)
        this.comprador();
      });

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.inmuebleService.getInmueblePorId(id)))
      .subscribe(
        (facilidadesInmuebles) =>
          (this.facilidades = facilidadesInmuebles.facilidades)
      );


      

  }

  // Metodo para obtener los datos del usuario logueado que son los del comprador
  async comprador() {
    let comprador = await this.userService
      .getUsuarioById(localStorage.getItem('userid'))
      .subscribe((resp) => {
        this.datosComprador = resp;
        console.log(this.datosComprador);
      });

    return comprador;
  }


  // Metodo que es activado con boton comprar
  // Llama a mercadopago

  async comprarMercadopago() {

    const userid = localStorage.getItem('userid')

    if (!userid) {
      this.mostrarAlert()
      return
    }

    this.mercadopagoService
      .generarPreferencia(this.datosComprador, this.dataInmueble)
      .subscribe((resp) => {
        console.log(resp.initPoint);
        const url = resp.initPoint;
        window.open(url, '_blank');
      });
 


  }

  async onClick() {
   this.telefono
   
   window.open(`https://wa.me/${this.telefono}`, '_blank')
  }


  // Metodo que define si aparece o no el boton de borrar publicacion
  async botonBorrar(idVendedor: string){    

    if (idVendedor == localStorage.getItem("userid")){
        console.log("los Id son Iguales", this.idVendedor, localStorage.getItem("userid"));
        this.mostrarBorrar = true;
        
    }else {
      console.log("los ids son diferentes", this.idVendedor, localStorage.getItem("userid"));
      
    }

  }

  async borrarInmueble( idInmueble : string | undefined ){
    console.log(idInmueble)    
    const inmuebleBorrado = await this.inmuebleService.borrarInmueble(idInmueble)
    .subscribe( resp => {
      console.log(resp)
      window.location.reload();
      
    } )
  }

 
  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'Para realizar una compra debes estar Logueado.',
      buttons: ['ok'],
    });

    await alert.present();
  }




  
}
