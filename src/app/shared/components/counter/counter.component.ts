import { Component, Pipe } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  actionSub:Subscription

  voteCounterPlus :number = 0;
  voteCounterMoins :number = 0;

  constructor(private voteService: VoteService) {
    // abonnement du composant aux notifications
    this.actionSub = this.voteService.actionObs
    .pipe(
      map(vote => vote.vote)
    ).subscribe(likeHate => {
      likeHate == LikeHate.LIKE? this.voteCounterPlus++ : this.voteCounterMoins++ ;
    })
  }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();
  }

}
