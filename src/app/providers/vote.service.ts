import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VoteRetour } from '../models/vote-retour';
import { LikeHate } from '../models/like-hate';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private action = new Subject<VoteRetour>();
  private urlApi: string = "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2";

  constructor(private http: HttpClient) {
  }

  get abonner() {
    return this.action.asObservable();
  }

  ajouterUnNouveauVote(vote: Vote) {
    return this.http.post<VoteRetour>(
      `${this.urlApi}/votes`,
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

  emettre(voteRetour: VoteRetour, likehate: LikeHate) {
    voteRetour.likeHate = likehate;
    this.action.next(voteRetour)
  }

}
