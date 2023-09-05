import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';



@NgModule({
  declarations: [
    LikeHateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LikeHateComponent
  ]
})
export class SharedModule { }
