import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { HttpClient } from "@angular/common/http";
import { AnunciosInmueble } from '../interfaces/interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menu!: string;

  

  inmueble!: AnunciosInmueble ;

  constructor(private activatedRoute: ActivatedRoute,
              private inmueblePorIdService: InmueblesService) { }

  ngOnInit() {
    /*this.menu = this.activatedRoute.snapshot.paramMap.get('id') as string;*/
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.inmueblePorIdService.getInmueblePorId(id) )
    ) .subscribe( inmueble => this.inmueble = inmueble )
   
 
  }

}
 