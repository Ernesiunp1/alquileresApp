import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { AnunciosInmueble, AnunciosVehiculo } from '../interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  inmuebles: AnunciosInmueble[] = [];
  vehiculos: AnunciosVehiculo[] = [];
  respUsuario: any;
  data: any = {};
  banderaActualizar: boolean = false;

  ActualizarDatosForm: FormGroup = this.fb.group({
    nombre: [''],
    apellido: [''],
    telefono: null,
    email: [''],
    password: [''],
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private alert: AlertController,
    private router: Router
  ) {}

  id: string | null = localStorage.getItem('userid');

  ngOnInit() {
    let verhiculos = this.userService
      .getVehiculosByUserId(this.id)
      .subscribe((respVehiculos) => this.vehiculos.push(...respVehiculos));

    let inmuebles = this.userService
      .getInmueblesByUserId(this.id)
      .subscribe((respInmuebles) => this.inmuebles.push(...respInmuebles));

    let usuario = this.userService
      .getUsuarioById(this.id)
      .subscribe((respUsuario) => {
        this.respUsuario = respUsuario;
        let { nombre, apellido, email, telefono } = this.respUsuario;
        this.data = { nombre, apellido, email, telefono };
        console.log('usuario', this.data);
      });
  }

  actualizaDatos() {
    this.banderaActualizar = true;
    console.log(this.ActualizarDatosForm.value);
  }

  actualizar() {
    this.userService
      .putUsuario(this.id, this.ActualizarDatosForm)
      .subscribe((resp) => {
        console.log(resp);

        if (!resp || resp == false) {
          this.alertNegativo();
        }

        this.alertActualizados();
      });
  }



  async alertActualizados() {
    const alert = await this.alert.create({
      header: 'Mi Perfil',
      subHeader: 'Actualización de datos',
      message: `Sus datos han sido actualizados`,
      buttons: ['OK'],
    });

    await alert.present();

    this.router.navigate(['home']);

    return;
  }


  
  async alertNegativo() {
    const alert = await this.alert.create({
      header: 'Mi Perfil',
      subHeader: 'Actualización de datos',
      message: `Ha ocurrido un Error datos NO actualizados`,
      buttons: ['OK'],
    });

    await alert.present();

    this.router.navigate(['home']);

    return;
  }
}
