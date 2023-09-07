import { Component, Input } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  subscription!: Subscription

  voteArrayHistory: Array<Vote> = [];

  constructor(private voteService: VoteService) {
  }

  ngOnInit(): void {
    this.subscription! = this.voteService.abonner
      .subscribe(vote => {
        this.voteArrayHistory.unshift(vote)
        console.log(vote);

      })
  }

  supprimer(val: number) {
    this.voteArrayHistory.splice(val, 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
