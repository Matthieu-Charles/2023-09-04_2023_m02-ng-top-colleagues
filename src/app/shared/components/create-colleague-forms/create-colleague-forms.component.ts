import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { CreationColleague } from './../../../models/creation-colleague';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  creationColleague: CreationColleague = {
    pseudo: "",
    first: "",
    last: "",
    photo: ""
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
          console.error(e)
          this.errorReturned = e
        },
        complete: () => {
          console.info('complete');
          creationColleagueForm.reset();
        }
      })
  }

}
