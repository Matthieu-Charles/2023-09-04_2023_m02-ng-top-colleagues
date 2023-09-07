import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Colleague } from './../models/colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private action = new Subject<Colleague>();

  constructor(private http: HttpClient) {

    this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues')
      .subscribe(
        (colleagueArray) => {
          for (let colleague of colleagueArray) this.action.next(colleague)
        }
      );

  }

  get abonner() {
    return this.action.asObservable();
  }

  publier(colleague: Colleague) {
    this.action.next(colleague);
  }

}
