import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { CreateColleagueReactiveModule } from './pages/create-colleague-reactive/create-colleague-reactive.module';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponentComponent } from './menu-component/menu-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WelcomeModule,
    SharedModule,
    HttpClientModule,
    CreateColleagueModule,
    CreateColleagueReactiveModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
