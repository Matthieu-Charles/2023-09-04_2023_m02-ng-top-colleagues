import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  subscription!: Subscription

  voteCounterPlus: number = 0;
  voteCounterMoins: number = 0;

  constructor(private voteService: VoteService) {
  }

  ngOnInit(): void {
    this.subscription = this.voteService.abonner
      .subscribe(vote => {
        vote.likeHate == LikeHate.LIKE ? this.voteCounterPlus++ : this.voteCounterMoins++;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
