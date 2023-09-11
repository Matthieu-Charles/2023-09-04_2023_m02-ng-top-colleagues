import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Colleague } from 'src/app/models/colleague';
import { DetailedColleague } from 'src/app/models/detailed-colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-detail',
  templateUrl: './colleague-detail.component.html',
})
export class ColleagueDetailComponent {

  pseudo: string | null = "";

  colleague!: DetailedColleague;

  constructor(private route: ActivatedRoute, private colleagueService: ColleagueService) {
    this.pseudo = this.route.snapshot.paramMap.get("pseudo");
    if (this.pseudo != null) {
      this.colleagueService.getColleagueByPseudo(this.pseudo)
        .subscribe(detailedColleague => {
          console.log(detailedColleague);
          this.colleague = detailedColleague;
        });
    }
  }

}
