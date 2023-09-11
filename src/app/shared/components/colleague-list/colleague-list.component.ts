import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colleague } from './../../../models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
})
export class ColleagueListComponent {

  @Input() events!: Observable<void>;

  private eventsSubscription!: Subscription;

  private colleagueList!: Subscription;

  colleaguesArray: Array<Colleague> = [];

  constructor(private colleagueService: ColleagueService) {

  }

  @Output() likeOrHateEvent: EventEmitter<Vote> = new EventEmitter<Vote>;

  ngOnInit() {

    this.colleagueList = this.colleagueService.listColleagues.subscribe(
      (colleagueServiceArray) => this.colleaguesArray = colleagueServiceArray
    )

    this.eventsSubscription = this.events.subscribe(() => {
      console.log('clickage sur refresh list!');
      this.colleagueList.unsubscribe();
      this.colleagueList = this.colleagueService.listColleagues.subscribe(
        (colleagueServiceArray) => this.colleaguesArray = colleagueServiceArray
      )
    })
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.colleagueList.unsubscribe();
  }

}
