import { Component } from '@angular/core';
import { ColleagueService } from '../providers/colleague.service';
import { DetailedColleague } from '../models/detailed-colleague';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-menu-component',
  templateUrl: './menu-component.html',
})
export class MenuComponent {

  pseudo: string = "";

  colleague!: DetailedColleague;

  constructor(private colleagueService: ColleagueService, private router: Router) {
    const pseudo = window.localStorage.getItem('pseudo')
    if (pseudo) {
      this.colleagueService.getColleagueByPseudo(pseudo).subscribe(
        {
          next: (colleague) => this.colleague = colleague
        }
      )
    }
  }

  deconnexion() {
    console.log("click déconnexion");
    window.localStorage.removeItem('jwt');
    window.localStorage.removeItem('pseudo');
    this.router.navigate(['login']);
  }

}
