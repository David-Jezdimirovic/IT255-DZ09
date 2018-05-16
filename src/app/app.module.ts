import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { SobeComponent } from './stranice/sobe/sobe.component';
import { KontaktComponent } from './stranice/kontakt/kontakt.component';


import { RouterModule, PreloadAllModules } from '@angular/router'; //2
import { ROUTES } from './app.routes'; //2
//import {routes} from './app.ROUTES' //1

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    SobeComponent,
    KontaktComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
   // routes //1
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }) //2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
