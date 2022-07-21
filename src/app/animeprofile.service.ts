import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AnimeProfile } from './models/animeprofile';

@Injectable({
  providedIn: 'root'
})
export class AnimeProfile {

  constructor(private http: HttpClient) { }

  getAnimeById(): Observable<AnimeProfile[]>{
    return this.http.get(`${environment.apiUrl}/animeprofile`, {
      withCredentials: true
    }).pipe(
      map(
        response => response as AnimeProfile[]
      )
    );
  }
}