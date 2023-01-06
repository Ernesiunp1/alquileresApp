import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusqueda'
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = ''): any[] {

    if (texto ==='') {
      return arreglo=[]
    }

    if (!arreglo) {
      return arreglo=[]
    }
       
    return arreglo.filter( 
      item =>item.region.includes( texto.toLowerCase() )
    )
  }

}
