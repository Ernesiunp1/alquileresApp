import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { Navigation, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Usuario } from 'src/app/pages/interfaces/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  private _usuario! : Usuario

  get usuario() {
    console.log(this._usuario);
    
    return {...this._usuario}
  }

  miFormulario: FormGroup = this.fb.group({

    email: [''],
    password: [''],

  })

  constructor( private fb: FormBuilder, 
               private router: Router,
               private loginService: UserService
                ) { }

  ngOnInit() {
    
  }


  login(){
    // console.log(this.miFormulario.value);
    
    this.loginService.login( this.miFormulario ).subscribe(
      resp => {
        this._usuario = resp
        console.log(resp);
        console.log('USUARIO:', this._usuario.token);
        localStorage.setItem('token', this._usuario.token)
                
      }
         
    )

     this.router.navigate(['listado'])

  }
  

  logout(){
    localStorage.removeItem('token')
  }



}
