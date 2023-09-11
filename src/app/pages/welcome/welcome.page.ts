import { Component, EventEmitter, Output } from '@angular/core';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
})
export class WelcomePage {
  voteArray: Array<Vote> = [];
}
