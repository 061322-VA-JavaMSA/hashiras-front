import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { Users } from 'src/app/models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  principal: Users;
  token: String;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    /*
      POST - /auth
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        body - username and password
    */

    // preparing our credentials to be in the body as form params
    let credentials = `username=${username}&password=${password}`;

    // environment allows us to easily switch between dev url and prod url
    return this.http.post(`${environment.apiUrl}/auth`, credentials, {
      headers: {
        // we're leveraging form params and not exposing credentials to the url
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      observe: 'response'
    }).pipe(
      map(
        response => {
          this.principal = response.body as Users;
          localStorage.setItem('user', JSON.stringify(response.body));
          this.token = response.headers.get('Authorization') || '';
          //localStorage.getItem('user')
        }
      )
    );
  }

  logout() {
    this.principal = null;
    this.token = '';
    localStorage.clear()
  }

  getLoggedInUser() {
    return this.principal = JSON.parse(localStorage.getItem('user')) as Users;;
  }
}
