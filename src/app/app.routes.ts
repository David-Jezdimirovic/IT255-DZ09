import { Routes, RouterModule } from '@angular/router';
//import {ModuleWithProviders} from '@angular/core';    //1

import { AppComponent } from './app.component';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { SobeComponent } from './stranice/sobe/sobe.component';
import { KontaktComponent } from './stranice/kontakt/kontakt.component';

export const ROUTES: Routes = [
    //{ path: '', component: PocetnaComponent}, //index stranica
    { path: '', redirectTo: 'pocetna', pathMatch: 'full'}, // redirekcija na pocetnu stranicu
    { path: 'pocetna', component: PocetnaComponent },
    { path: 'sobe', component: SobeComponent },
    { path: 'kontakt', component: KontaktComponent }
  ];


//export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES,{useHash: true}); //1