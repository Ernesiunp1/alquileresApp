import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/inmuebles/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'buscar-inmueble',
    loadChildren: () => import('./pages/inmuebles/buscar-inmueble/buscar-inmueble.module').then( m => m.BuscarInmueblePageModule)
  },
  {
    path: 'agregar-inmueble',
    loadChildren: () => import('./pages/inmuebles/agregar-inmueble/agregar-inmueble.module').then( m => m.AgregarInmueblePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detalle-anuncio/:id',
    loadChildren: () => import('./pages/detalle-anuncio/detalle-anuncio.module').then( m => m.DetalleAnuncioPageModule)
  },
  {
    path: 'listado-vehiculos',
    loadChildren: () => import('./vehiculos/listado-vehiculos/listado-vehiculos.module').then( m => m.ListadoVehiculosPageModule)
  },
  {
    path: 'detalle-vehiculo/:id',
    loadChildren: () => import('./vehiculos/detalle-vehiculo/detalle-vehiculo.module').then( m => m.DetalleVehiculoPageModule)
  },
  {
    path: 'agregar-vehiculo',
    loadChildren: () => import('./vehiculos/agregar-vehiculo/agregar-vehiculo.module').then( m => m.AgregarVehiculoPageModule)
  },
  {
    path: 'buscar-vehiculo',
    loadChildren: () => import('./vehiculos/buscar-vehiculo/buscar-vehiculo.module').then( m => m.BuscarVehiculoPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./pages/ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pages/pagos/pagos.module').then( m => m.PagosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {useHash: true})
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
