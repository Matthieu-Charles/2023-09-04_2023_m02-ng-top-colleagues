import { Component, EventEmitter, Output } from '@angular/core';
import { Colleague } from './../../../models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
})
export class ColleagueListComponent {

  colleaguesArray: Array<Colleague> = [];

  actionSub :Subscription | undefined;

  constructor(private colleagueService :ColleagueService) {
    this.actionSub = this.colleagueService.list.subscribe(
      (colleagueArray) => this.colleaguesArray = colleagueArray
    )
  }

  @Output() likeOrHateEvent:EventEmitter<Vote> = new EventEmitter<Vote>;

}
