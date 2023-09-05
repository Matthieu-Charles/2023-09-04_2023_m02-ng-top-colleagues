import { Component, Input } from '@angular/core';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  @Input() voteArrayHistory :Array<Vote> = [];

  supprimer(val :number) {
    console.log(val)
    //supprimer dans la liste de vote celle ayant l'id = val
  }
}
