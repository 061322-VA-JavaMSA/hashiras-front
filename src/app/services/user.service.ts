import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Users } from '../models/users';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  updateUseryId(userString: String): Observable<any> {
    return this.http.put(`${environment.serverApiUrl}/users`, userString, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      response => { return response; },
      catchError(error => {
        return throwError(error);
      })
    );
  }

}
