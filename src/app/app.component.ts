import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vote } from './models/vote';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

  voteArray :Array<Vote> = [];

  @Output() vote :EventEmitter<Vote> = new EventEmitter<Vote>();

  traiterVote(val :Vote) {
    this.voteArray.push(val);
    this.vote.emit(val);
    console.log(this.vote);
  }

}
