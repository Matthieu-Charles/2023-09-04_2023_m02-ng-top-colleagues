import { Component, Input } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteRetour } from 'src/app/models/vote-retour';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  subscription!: Subscription

  voteArrayHistory: Array<VoteRetour> = [];

  constructor(private voteService: VoteService) {
  }

  ngOnInit(): void {
    this.subscription! = this.voteService.abonner
      .subscribe(vote => this.voteArrayHistory.unshift(vote))
  }

  supprimer(val: number) {
    this.voteArrayHistory.splice(val, 1);
  }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.subscription.unsubscribe();
  }
}
