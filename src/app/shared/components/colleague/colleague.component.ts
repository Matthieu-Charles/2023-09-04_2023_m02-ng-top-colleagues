import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Input() colleague!: Colleague;

  subscription!: Subscription;

  constructor(private voteService: VoteService) {
  }

  ngOninit(): void {
    this.subscription = this.voteService.abonner.subscribe(
      voteRetour => {
        this.colleague.score = voteRetour.colleague.score;
      }
    )
  }

  traiter(val: LikeHate) {
    console.log("val dans colleagueComponent : ", val);

    this.voteService.ajouterUnNouveauVote({
      colleague: this.colleague,
      vote: val
    }).subscribe(
      voteRetour => this.colleague.score = voteRetour.score
    );
  };

}
