import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { CreationColleague } from './../../../models/creation-colleague';
import { NgForm } from '@angular/forms';

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

  constructor(private colleagueService: ColleagueService) {
  }

  onSubmitForm(creationColleagueForm: NgForm) {
    console.log(this.creationColleague);
    this.colleagueService
      .publier(this.creationColleague)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          this.errorReturned = e
        },
        complete: () => {
          console.info('complete');
          creationColleagueForm.reset();
        }
      })
  }

}
