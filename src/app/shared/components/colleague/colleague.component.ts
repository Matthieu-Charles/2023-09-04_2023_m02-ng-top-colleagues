import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  constructor(private voteService :VoteService){
  }

  @Input() colleague!: Colleague;

  traiter(val :LikeHate) {
    if (val == LikeHate.LIKE) this.colleague.score += 100;
    else this.colleague.score -= 100;
    let vote :Vote = {
      colleague: this.colleague,
      vote: val === "LIKE" ? LikeHate.LIKE : LikeHate.HATE
    }
    this.voteService.ajouter(vote);
  };

}
