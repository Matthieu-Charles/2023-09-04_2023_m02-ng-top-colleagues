import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent
  ]
})
export class SharedModule { }
