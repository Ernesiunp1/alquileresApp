import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit {

  user: string | null = ""

  constructor() { }

  ngOnInit() {

    this.user = localStorage.getItem('usuarioTurista');

  }

}
