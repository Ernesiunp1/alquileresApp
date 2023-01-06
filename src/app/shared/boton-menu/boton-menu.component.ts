import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.scss'],
})
export class BotonMenuComponent implements OnInit {

  titulo: string = ""

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {}

  mostarMenu(){
    this.menuCtrl.open()
    
  }



}
