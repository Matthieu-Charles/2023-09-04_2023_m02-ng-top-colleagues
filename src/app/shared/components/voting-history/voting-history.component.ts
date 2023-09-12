import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vote } from 'src/app/models/vote';
import { VoteRetour } from 'src/app/models/vote-retour';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
})
export class VotingHistoryComponent {

  subscription!: Subscription

  voteArrayHistory: Array<VoteRetour> = [];

  constructor(private voteService: VoteService) {
  }

  ngOnInit(): void {
    this.subscription! = this.voteService.abonner
      .subscribe(
        vote => {
          this.voteArrayHistory.unshift(vote)
          if (this.voteArrayHistory.length > 5) {
            this.voteArrayHistory.splice(5, 1);
          }
        }
      )
  }

  supprimer(val: number) {
    this.voteArrayHistory.splice(val, 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
