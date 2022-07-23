import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lists } from '../models/lists';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  handleError: any;
  listInfo: Lists;
  constructor(private http: HttpClient) { }

  addList(list: Lists): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/anime`, list).pipe(
      //map(response => response as Lists)

      //   map(response => {
      //     this.response = response.body;
      // })
      map(
        response => {
          return response;
        }
      )
    );
  }
}
