import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Lists } from '../models/lists';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  handleError: any;
  listInfo: Lists;
  data: any;
  constructor(private http: HttpClient) { }
  /*
  addToList() { //adds anime to list  and displays success message
  */
  addList(list: Lists): Observable<any> {
    const http$ = this.http.post<any>(`${environment.apiUrl}/anime`, list);
    return http$.pipe(
      map(response => { return response as Lists; }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

}
