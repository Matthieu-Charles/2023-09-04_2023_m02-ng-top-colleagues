import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Input() score:number = 0;

  @Output() likeOrHateEvent:EventEmitter<LikeHate> = new EventEmitter<LikeHate>;

  likeOrHate(valeur :string) {
    valeur === "LIKE" ? this.likeOrHateEvent.emit(LikeHate.LIKE) : this.likeOrHateEvent.emit(LikeHate.HATE)
  }

}
