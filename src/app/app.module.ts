import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import localEsArg from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { PipesModule } from './pipes/pipes.module';
registerLocaleData( localEsArg );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, 
           IonicModule.forRoot(), 
           AppRoutingModule,
           SharedModule,
           HttpClientModule,
           PipesModule
          ],
  
  exports:[
  
    SharedModule,
    PipesModule
  
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
