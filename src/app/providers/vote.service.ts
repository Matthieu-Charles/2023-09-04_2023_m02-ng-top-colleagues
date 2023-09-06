import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  voteArray :Vote[] = [];

  ajouter(vote :Vote){
    console.log(vote);
    this.voteArray.unshift(vote);
    console.log(this.voteArray);
  }

}
