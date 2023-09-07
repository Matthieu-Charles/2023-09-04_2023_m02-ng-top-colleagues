import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  private action = new Subject<Vote>();

  get abonner() {
    return this.action.asObservable();
  }

  ajouter(vote :Vote){
    this.action.next(vote);
  }

}
