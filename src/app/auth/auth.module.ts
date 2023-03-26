import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ LoginComponent,
                  RegisterComponent, 
                  MainComponent ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
