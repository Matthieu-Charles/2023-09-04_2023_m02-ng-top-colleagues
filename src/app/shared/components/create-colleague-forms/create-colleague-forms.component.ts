import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { CreationColleague } from './../../../models/creation-colleague';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
})
export class CreateColleagueFormsComponent {

  creationColleague: CreationColleague = {
    pseudo: "",
    first: "",
    last: "",
    photo: "https://ucarecdn.com/c65e1532-fbdd-4c23-8f2b-e03f99af9759/-/crop/900x900/403,0/-/preview/-/progressive/yes/-/format/auto/"
  };

  errorReturned: string = "";

  constructor(private colleagueService: ColleagueService, private router: Router) {
  }

  onSubmitForm(creationColleagueForm: NgForm) {
    this.colleagueService
      .publier(this.creationColleague)
      .subscribe({
        error: (e) => {
          this.errorReturned = e
        },
        complete: () => {
          creationColleagueForm.reset();
          this.router.navigate(['welcomePage']);
        }
      })
  }

}
