import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent
  ]
})
export class SharedModule { }
