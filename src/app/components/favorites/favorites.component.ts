import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { ListsService } from './../../services/lists.service';
import { Lists } from 'src/app/models/lists';

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
  listInput: Lists;
  addSuccess: string;
  addError: string;
  constructor(private authServ: AuthService, private http: HttpClient, private listServ: ListsService) { }

  ngOnInit(): void {
    this.searchinput = '';
    this.searchBox = 'd-none';
    this.errorMessage = '';
    this.errorBox = 'd-none';
    this.malId = 0;
    this.addSuccess = 'd-none';
    this.addError = 'd-none';
    let user = this.authServ.getLoggedInUser();
    if (user) {
      this.loggedInUser = user;
    }
    this.listInput = new Lists(0, 0, 0, 'CURRENTLY');
  }

  /*
  searchAnime() { //searches for anime and displays results if found
  */
  searchanime() {
    this.addSuccess = 'd-none';
    this.addError = 'd-none';
    this.errorBox = 'd-none';
    if (this.searchinput === '') {
      this.errorMessage = 'Please enter an anime title.';
      this.errorBox = '';

    } else {
      this.http.get(`https://api.jikan.moe/v4/anime?q=${this.searchinput}&sfw`).subscribe(data => {
        if (data['data'].length === 0) {
          this.errorMessage = 'No anime found.';
          this.errorBox = '';
          this.searchBox = 'd-none';

        } else {
          this.animeInfo = data['data'][0];
          this.searchBox = '';
          this.malId = this.animeInfo.mal_id;
        }
      }, error => {
        console.log("Error caught at Subscriber " + error);
      },
      );

    }

  }

  /*
  addToList() { //adds anime to list  of logged in user and adds to database  if not already in database   
  */
  addanime() {
    this.listInput = new Lists(this.malId, this.loggedInUser.id, 5, 'CURRENTLY');
    this.listServ.addList(this.listInput).subscribe(data => {
      this.addSuccess = '';
      this.addError = 'd-none';
    }, error => {
      this.addSuccess = 'd-none';
      this.addError = '';
    }
    );
  }
}

