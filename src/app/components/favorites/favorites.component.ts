import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  searchinput: string;
  animeInfo: any;
  errorMessage: string;
  errorBox: string;
  searchBox: string;
  malId: number;
  loggedInUser: Users;

  constructor(private authServ: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.searchinput = '';
    this.searchBox = 'd-none';
    this.errorMessage = '';
    this.errorBox = 'd-none';
    this.malId = 0;
    let user = this.authServ.getLoggedInUser();
    if (user) {
      this.loggedInUser = user;
    }
  }

  searchanime() {

    if (this.searchinput === '') {
      this.errorMessage = 'Please enter an anime title.';
      this.errorBox = '';

    } else {
      this.http.get(`https://api.jikan.moe/v4/anime?q=${this.searchinput}&sfw`).subscribe(data => {
        console.log(data);
        if (data['data'].length === 0) {
          this.errorMessage = 'No anime found.';
          this.errorBox = '';
          this.searchBox = 'd-none';

        } else {
          this.animeInfo = data['data'][0];
          this.searchBox = '';
          this.malId = this.animeInfo.mal_id;
        }
      }
      );

    }

  }
  //http://localhost:8080/anime
  addanime() {
    this.http.post(`http://localhost:8080/anime`, {
      anime_id: this.malId,
      user_id: this.loggedInUser.id,
      user_rating: 0,
      status: 'CURRENTLY'
    }).subscribe(data => {
      console.log(data);
    }
    );
  }

}

