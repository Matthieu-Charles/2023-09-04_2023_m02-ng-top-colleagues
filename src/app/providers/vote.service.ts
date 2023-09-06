import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  private action = new Subject<Vote>();

  get actionObs() {
    return this.action.asObservable();
  }

  ajouter(vote :Vote){
    console.log(vote);
    this.action.next(vote);
  }

}
