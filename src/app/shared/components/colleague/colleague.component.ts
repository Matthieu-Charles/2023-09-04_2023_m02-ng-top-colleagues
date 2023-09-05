import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Input() colleague!: Colleague;

  traiter(val :LikeHate) {
    if (val == LikeHate.LIKE) this.colleague.score += 100;
    else this.colleague.score -= 100;
  };

}
