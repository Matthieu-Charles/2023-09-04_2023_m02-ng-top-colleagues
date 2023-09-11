import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vote } from './models/vote';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'top-colleagues';
}
