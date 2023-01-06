import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() titulo: string = ""

  

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
  }
 

}
