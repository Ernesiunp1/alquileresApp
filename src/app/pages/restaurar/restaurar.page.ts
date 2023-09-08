import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from "@ionic/angular";
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
})
export class RestaurarPage implements OnInit {
  pwdIguales: boolean = false;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  id = '';

  miFormulario: FormGroup = this.fb.group({
    contraseña: [''],
    confirmar: [''],
  });

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // Aquí obtienes los datos del query
      this.id = params['id'];
      const password = params['password'];
      const email = params['email'];

      console.log('id:', this.id);
      console.log('password:', password);
      console.log('email:', email);
    });
  }

  // Metodo para restaurar la contraseña
  // desde la pagina resturar
  async restaurar() {
    // console.log('Hola mundo', this.miFormulario);
    // // console.log(
    // //   this.miFormulario.value.contraseña,
    // //   this.miFormulario.value.confirmar
    // // );

    // evaluando si ambas contraseñas son iguales
    if (
      this.miFormulario.value.contraseña != this.miFormulario.value.confirmar
    ) {
      this.mostrarAlert();
      return
    }

    //  Contraseña nueva
    const data = {
      password: this.miFormulario.value.confirmar,
    };

    // LLamada al servicio que actualiza la contraseña
    return this.userService
      .restaurarPassword(this.id, data)
      .subscribe((resp) => {
        console.log(resp);
        if (resp) {
          this.mostrarAlert2();
          this.router.navigate(["auth/login"])
          
        }
       

      });
  }





  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Las contraseñas deben ser iguales.',
      buttons: ['OK'],
    });

    await alert.present();
  }



  async mostrarAlert2() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Su contraseña ha sido actualizada.',
      buttons: ['OK'],
    });
    
    await alert.present();
  }
}
