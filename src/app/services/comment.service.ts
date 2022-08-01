import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  public getCommentsByAnimeId(animeId: number): Observable<Comment[]> {
    return this.http.get(`${environment.serverApiUrl}/comment/${animeId}`).pipe(
      map(
        response => response as Comment[]
      )
    );
  }
}
