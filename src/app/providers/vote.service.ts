import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VoteRetour } from '../models/vote-retour';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private action = new Subject<Vote>();

  constructor(private http: HttpClient) {

    this.http.get<Vote[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes')
      .subscribe(
        (voteArray) => {
          for (let vote of voteArray) {
            this.action.next(vote)
          }
        }
      );

  }

  get abonner() {
    return this.action.asObservable();
  }

  ajouterUnNouveauVote(vote: Vote) {
    this.action.next(vote);
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
