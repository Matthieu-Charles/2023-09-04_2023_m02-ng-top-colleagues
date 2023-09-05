import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Input() colleague:Colleague = {
    pseudo:'jean',
    score: 121,
    photo: 'https://www.programme-tv.net/imgre/fit/~2~providerPerson~401f26e0b72ceedc.jpeg/140x140/quality/80/franck-ribery.jpeg'
  };

}
