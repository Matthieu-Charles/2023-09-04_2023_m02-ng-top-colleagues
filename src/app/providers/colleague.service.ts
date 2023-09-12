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

  private urlApi: string = "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2";

  constructor(private http: HttpClient) {
  }

  get listColleagues() {
    return this.http.get<Colleague[]>(`${this.urlApi}/colleagues`)
  }

  publier(creationColleague: CreationColleague) {
    return this.http.post<Colleague>(
      `${this.urlApi}/colleagues`,
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
    return this.http.get<DetailedColleague>(`${this.urlApi}/colleagues/${pseudo}`)
  }

}
