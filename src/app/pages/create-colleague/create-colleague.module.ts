import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateColleaguePage
  ],
  exports: [
    CreateColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CreateColleagueModule { }
