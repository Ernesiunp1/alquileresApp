import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { AnunciosInmueble } from '../interfaces/interface';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit { constructor( private inmuebleService: InmueblesService ) { }

usuarioId: string = ''

inmuebles: AnunciosInmueble[] = []

  ngOnInit() {
      
      this.inmuebleService.getInmuebles()
      .subscribe( resp  => {
        console.log(resp);
       for (let index = 0; index < resp.length; index++) {
        let id = resp[index].user!.id;
        
        
        
        if (resp[index].user!.id.includes('68af078c-681b-414b-9eb4-85d57766cc0b')   ) {
          this.inmuebles.push(resp[index])          
        }

        // console.log(resp[index]);
        // this.usuarioId=id  

       
                     
       }

      //  if (this.usuarioId == 'dfa2b9fc-8a16-4425-8ca8-e29c65e8c482') {
      //     console.log(true);
      //     this.inmuebles.push(...resp)
          
      //  }


       
        
     

          
        
      //  console.log( resp[0].user!.id )
       
        
        } )
  }
    

  onClick(){}



}
