import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
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
  StatusList = [
    { id: "CURRENTLY", name: "Watching" },
    { id: "WANT", name: "Plan to Watch" },
    { id: "VIEWED", name: "Completed" },
    { id: "DROPPED", name: "Dropped" }
  ];

  RatingList = [
    { id: 10, name: "(10) Masterpiece" },
    { id: 9, name: "(9) Great" },
    { id: 8, name: "(8) Very Good" },
    { id: 7, name: "(7) Good" },
    { id: 6, name: "(6) Fine" },
    { id: 5, name: "(5) Average" },
    { id: 4, name: "(4) Bad" },
    { id: 3, name: "(3) Very Bad" },
    { id: 2, name: "(2) Horrible" },
    { id: 1, name: "(1) Appalling" }
  ];

  constructor(private http: HttpClient) { }

  /*
  addToList() { //adds anime to list  and displays success message
  */
  addList(list: Lists): Observable<any> {
    return this.http.post<any>(`${environment.serverApiUrl}/anime`, list).pipe(
      map(response => { return response as Lists; }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getListByUserIdAndAnimeId(user_id: number, anime_id: number): Observable<any> {
    return this.http.get(`${environment.serverApiUrl}/anime/user/${user_id}/anime/${anime_id}`).pipe(
      map(response => { return response as Lists; }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  updateRatingById(id: number, user_rating: number): Observable<any> {
    return this.http.put(`${environment.serverApiUrl}/anime/${id}/rate`, `user_rating=${user_rating}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      response => { return response; },
      catchError(error => {
        return throwError(error);
      })
    );
  }

  updateStatusById(id: number, status: String): Observable<any> {
    return this.http.put(`${environment.serverApiUrl}/anime/${id}/status`, `status=${status}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      response => { return response; },
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${environment.serverApiUrl}/anime/${id}`).pipe(
      response => { return response; },
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

