import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor injection
  constructor(private http: HttpClient/*, private auth: AuthService*/) { }

  getUsers(): Observable<Users[]>{
    return this.http.get(`${environment.serverApiUrl}/users`).pipe(
      map(
        response => response as Users[]
      )
    );
  }
}