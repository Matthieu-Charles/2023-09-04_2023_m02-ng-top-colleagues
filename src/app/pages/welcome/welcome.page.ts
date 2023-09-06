import { Component, EventEmitter, Output } from '@angular/core';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  voteArray :Array<Vote> = [];

  traiterVote(val :Vote) {
    this.voteArray.unshift(val);
  }
}
