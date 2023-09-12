import { Injectable } from '@angular/core';
import { ConnectionObject } from '../models/connection-object';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  connecter(connexionObjet: ConnectionObject) {
    return this.http.post<any>(
      'http://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login',
      {
        pseudo: connexionObjet.pseudo,
        password: connexionObjet.motDePasse,
      },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    )
  }
}
