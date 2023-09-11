import { Component, EventEmitter, Output } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { Subject } from 'rxjs';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
})
export class WelcomePage {

  eventSubject: Subject<void> = new Subject<void>;

  clickRefresh() {
    this.eventSubject.next();
  }

}
