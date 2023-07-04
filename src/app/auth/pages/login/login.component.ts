import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { Navigation, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Usuario } from 'src/app/pages/interfaces/interface';
import { error } from 'console';
import { AlertController } from '@ionic/angular'
import { Observable } from 'rxjs';

interface BusquedaEmail {
  email?: string;
  mensaje?: string
} 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public alertButtons = ['ok'];

  private _usuario!: Usuario;

  get usuario() {
    console.log(this._usuario);

    return { ...this._usuario };
  }

  miFormulario: FormGroup = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: UserService,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  login() {
    // console.log(this.miFormulario.value);

    this.loginService.login(this.miFormulario).subscribe(
      (resp) => {
        this._usuario = resp;
        console.log(resp);
        console.log('USUARIO 1', this._usuario);
        console.log('USUARIO 3', this.usuario);

        console.log('USUARIO:', this._usuario.token);
        localStorage.setItem('token', this._usuario.token);
        localStorage.setItem('usuarioTurista', this._usuario.nombre);
        localStorage.setItem('userid', this._usuario.id);
        this.router.navigate(['home']);
      },

      (error) => {
        console.log('Error:', error.error.message);
        let errorMessage = error.error.message;
        this.mostrarAlert(errorMessage);
      }
    );
  }


  logout(){
    localStorage.removeItem('token')
  }

  mostrarAlert(errorMessage: any) {

    const alert = this.alert.create({
      header: 'ERROR',
      message: errorMessage,
      subHeader: 'CLAVE O USUSARIO INVALIDOS',
      buttons: ['OK'],
    });
    alert.then((alert) => alert.present());
  }

  async presentAlert(email: any) {

    this.loginService
      .obtenerUsuarioEmail(email)
      .subscribe((resp: BusquedaEmail) => {
        console.log(resp);
        const respuesta = resp;

        if (!respuesta.email) {
          this.emailNoEncontrado(email);
          return;
        }

        this.emailEncontrado(email);
        return resp;
      });

    if (!this.miFormulario.value.email) {
      const alert = await this.alert.create({
        header: 'Restitución de clave',
        subHeader: 'Campo email',
        message: 'por favor llenar el campo del email',
        buttons: ['OK'],
      });

      await alert.present();

      return;
    }
  }

  //  metodo Alert para mostrar cuando el email no fue encontrado en olvide mi clave
  async emailNoEncontrado(email: any) {

    const alert = await this.alert.create({
      header: 'Restitución de clave',
      subHeader: 'utilice otro email',
      message: `El email: ${email} no fue encontrado en la Base de Datos`,
      buttons: ['OK'],
    });

    await alert.present();

    return;
  }

  // metodo para mostrar un alert cuando el email si se encontro

  async emailEncontrado(email: any) {

    const alert = await this.alert.create({
      header: 'Restitución de clave',
      subHeader: 'revice su email',
      message: `se ha enviado un correo al email: ${email}`,
      buttons: ['OK'],
    });

    await alert.present();

    return;
  }




}
