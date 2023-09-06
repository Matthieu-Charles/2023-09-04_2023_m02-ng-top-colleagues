import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http: HttpClient) {
    this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues')
    .subscribe(
      (colleagueArray) => this.action.next(colleagueArray)
    );
   }

  // création d'une instance de Subject
  // le subject est privé, seul le service ServiceA peut émettre une valeur
  // <string> désigne la nature de la donnée à notifier
  private action = new Subject<Colleague[]>();

  get list() {
    return this.action.asObservable();
  }

}


// ### Tous les collègues
// GET https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues
// ### Le détail d'un collègue
// GET https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/gio01
// ### Les votes
// GET https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes
