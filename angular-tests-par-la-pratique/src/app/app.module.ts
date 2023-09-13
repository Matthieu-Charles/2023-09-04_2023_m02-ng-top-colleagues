import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BanniereComponent } from './banniere/banniere.component';
import { CompteurComponent } from './compteur/compteur.component';

@NgModule({
  declarations: [
    AppComponent,
    BanniereComponent,
    CompteurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
