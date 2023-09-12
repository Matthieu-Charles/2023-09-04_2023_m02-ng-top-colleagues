import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { ColleagueDetailComponent } from './shared/components/colleague-detail/colleague-detail.component';
import { LoginPage } from './pages/login/login.page';
import { authGuard } from './guard/auth.guard';
import { MenuComponent } from './menu/menu-component';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    canActivate: [authGuard],
    children:
      [
        { path: '', component: MenuComponent, outlet: 'secondary' },
        { path: 'colleagues/:pseudo', component: ColleagueDetailComponent },
        { path: 'template', component: CreateColleaguePage },
        { path: 'reactive', component: CreateColleagueReactivePage },
        { path: 'welcomePage', component: WelcomePage },
        { path: '', pathMatch: 'full', redirectTo: 'login' }
      ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }