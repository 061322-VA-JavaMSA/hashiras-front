import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { Users } from 'src/app/models/users';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  principal: Users;
  token: String;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


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
    return this.http.post(`${environment.serverApiUrl}/auth`, credentials, {
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
          localStorage.setItem('token', JSON.stringify(this.token));
          this.loggedIn.next(true);
          //localStorage.getItem('user')
        }
      )
    );
  }

  logout() {
    this.principal = null;
    this.token = '';
    localStorage.clear();
    this.loggedIn.next(false);

  }

  getLoggedInUser() {
    return this.principal = JSON.parse(localStorage.getItem('user')) as Users;;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
