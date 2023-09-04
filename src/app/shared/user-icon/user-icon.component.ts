import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
})

export class UserIconComponent implements OnInit {
  
  user = localStorage.getItem('usuarioTurista')

 
  constructor() { }

  ngOnInit() {}

}
