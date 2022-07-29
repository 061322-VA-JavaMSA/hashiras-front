import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AnimeList, Lists } from '../models/lists';

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {

  // constructor injection
  constructor(private http: HttpClient) { }

  public getListByUserIdAndStatus(user_id,status): Observable<Lists[]>{
    
    return this.http.get(`${environment.serverApiUrl}/anime/user/${user_id}/status/${status}`).pipe(
      map(
            response => response as Lists[]
      )
    );
  }

  public searchList(anime_id): Observable<Lists[]>{
      
      return this.http.get(`${environment.animeApiUrl}/anime/${anime_id}`).pipe(
        map(
          response => response as Lists[]
        )
      );
    }

    public browseBySeason(year, season): Observable<Lists[]>{

      return this.http.get(`${environment.animeApiUrl}/seasons/${year}/${season}`).pipe(
        map(
          response => response as Lists[]
        )
      );
    }

    public browseByGenre(genre): Observable<Lists[]>{
      
      return this.http.get(`${environment.animeApiUrl}/anime/genre/${genre}`).pipe(
        map(
          response => response as Lists[]
        )
      );
    }
}