import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private router: Router) { }
  public getCommentsByAnimeId(animeId: number): Observable<Comment[]> {
    return this.http.get(`${environment.serverApiUrl}/comment/${animeId}`).pipe(
      map(
        response => response as Comment[]
      )
    );
  }

  addComment(comment: any)  {
    console.log(comment)

    const req = this.http.get(`${environment.serverApiUrl}/comment?animeId=${comment.anime_id}&author=${comment.author}&comment=${comment.comment}`).pipe(
      map(
        response => response as Comment[]
    ));

    req.subscribe();
    }

}
