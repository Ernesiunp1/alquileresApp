import { Component, OnInit } from '@angular/core';
import { ɵgetAllInstancesOf } from '@angular/fire';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup =  this.fb.group({
    
    //id:       ['', [Validators.required]],
    nombre:   ['', ],
    apellido: ['', ],
    aliasUsuario:  ['', ],
    telefono: [254559112, ],
    email:    ['', Validators.email],
    password: ['', ]
  })

  

  constructor( private fb: FormBuilder,
               private userServicies: UserService,
               private router: Router  ) { }

  ngOnInit() {}



   createUser(){
    
     this.userServicies.agregarUsuario( this.miFormulario )
    .subscribe( resp => console.log( 'Resp', resp )  )

    console.log(this.miFormulario.value );
    console.log( this.miFormulario.valid );
    this.router.navigate(['auth/login'])
    
    
  }


  onClick(){
    this.userServicies.obtenerTodo().
    subscribe( (resp) => {
        console.log(resp);
              
    } )
  }



}
