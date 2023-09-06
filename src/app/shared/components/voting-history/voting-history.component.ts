import { Component, Input } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  constructor(private voteService :VoteService) {
  }

  voteArrayHistory :Array<Vote> = this.voteService.voteArray;

  supprimer(val :number) {
    this.voteArrayHistory.splice(val, 1);
  }
}
