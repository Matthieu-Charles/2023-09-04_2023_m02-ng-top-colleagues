import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  colleague:Colleague = {
    pseudo:'jean',
    score: 0,
    photo: 'https://www.programme-tv.net/imgre/fit/~2~providerPerson~401f26e0b72ceedc.jpeg/140x140/quality/80/franck-ribery.jpeg'
  };

  traiter(val :LikeHate) {
    if (val == LikeHate.LIKE) this.colleague.score += 100;
    else this.colleague.score -= 100;
  };

}
