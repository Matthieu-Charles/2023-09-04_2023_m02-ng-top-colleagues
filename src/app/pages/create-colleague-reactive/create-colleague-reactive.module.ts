import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleagueReactivePage } from './create-colleague-reactive.page';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CreateColleagueReactivePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateColleagueReactivePage
  ]
})
export class CreateColleagueReactiveModule {

  colleagueReactiveForm = new FormGroup({

  })

}
