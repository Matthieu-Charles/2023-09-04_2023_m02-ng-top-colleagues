import { Component, EventEmitter, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Output() likeOrHateEvent:EventEmitter<LikeHate> = new EventEmitter<LikeHate>;

  likeOrHate(valeur :string) {
    console.log(valeur);
    valeur === "LIKE" ? this.likeOrHateEvent.emit(LikeHate.LIKE) : this.likeOrHateEvent.emit(LikeHate.HATE)
  }

}
