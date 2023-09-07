import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteRetour } from '../models/vote-retour';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient, private colleagueService: ColleagueService) { }

  private action = new Subject<VoteRetour>();

  get abonner() {
    return this.action.asObservable();
  }

  ajouterUnNouveauVote(vote: Vote) {
    console.log(vote);

    return this.http.post<VoteRetour>(
      'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes',
      {
        "pseudo": vote.colleague.pseudo,
        "like_hate": vote.vote
      },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    )
  }

}
