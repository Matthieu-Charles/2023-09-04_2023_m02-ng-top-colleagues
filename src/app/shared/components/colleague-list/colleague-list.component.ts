import { Component, EventEmitter, Output } from '@angular/core';
import { Colleague } from './../../../models/colleague';
import { ScorePipe } from '../../pipes/score.pipe';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
})
export class ColleagueListComponent {

  constructor(private colleagueService :ColleagueService) {
  }

  @Output() likeOrHateEvent:EventEmitter<Vote> = new EventEmitter<Vote>;

  colleaguesArray: Array<Colleague> = this.colleagueService.list();

}
