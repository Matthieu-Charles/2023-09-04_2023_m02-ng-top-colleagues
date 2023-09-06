import { Component, Input } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  actionSub:Subscription

  voteArrayHistory :Array<Vote> = [];

  constructor(private voteService: VoteService) {
    // abonnement du composant aux notifications
    this.actionSub = this.voteService.actionObs
    .subscribe(vote => this.voteArrayHistory.unshift(vote))
  }

  supprimer(val :number) {
    this.voteArrayHistory.splice(val, 1);
  }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();
  }
}
