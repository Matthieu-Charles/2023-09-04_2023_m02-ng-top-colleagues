import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
import { Colleague } from './../models/colleague';
import { CreationColleague } from '../models/creation-colleague';
import { DetailedColleague } from './../models/detailed-colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private action = new Subject<Colleague>();

  constructor(private http: HttpClient) {
  }

  get listColleagues() {
    return this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues')
  }

  publier(creationColleague: CreationColleague) {
    return this.http.post<Colleague>(
      'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues',
      {
        pseudo: creationColleague.pseudo,
        first: creationColleague.first,
        last: creationColleague.last,
        photo: creationColleague.photo,
      },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    ).pipe(
      tap((colleague) => this.action.next(colleague))
    )
  }

  getColleagueByPseudo(pseudo: string) {
    return this.http.get<DetailedColleague>(`https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/` + pseudo)
      .pipe(
        tap((detailedColleague) => console.log(detailedColleague))
      )
  }

}
