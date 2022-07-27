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
  listSend: Lists;
  addSuccess: string;
  addError: string;
  animeSmallDetails: string;
  StatusList = [];
  RatingList = [];
  statusInput: String;
  ratingInput: number;
  addErrorMessage: String;
  spinRate: String;
  rateVisibility: String;
  spinStatus: String;
  statusVisibility: String;

  constructor(private authServ: AuthService, private http: HttpClient, private listServ: ListsService) { }

  ngOnInit(): void {
    this.searchinput = '';
    this.searchBox = 'd-none';
    this.errorMessage = '';
    this.errorBox = 'd-none';
    this.malId = 0;
    this.addSuccess = 'd-none';
    this.addError = 'd-none';
    this.spinRate = 'd-none';
    this.rateVisibility = '';
    this.spinStatus = 'd-none';
    this.statusVisibility = '';
    let user = this.authServ.getLoggedInUser();
    if (user) {
      this.loggedInUser = user;
    }
    this.listInput = new Lists(0, 0, 0, 0, '');
    this.statusInput = "CURRENTLY";

    this.ratingInput = 0;
    this.animeSmallDetails = 'small d-none';
    this.addErrorMessage = 'Unable to add to your favorites!';
    this.StatusList = this.listServ.StatusList;
    this.RatingList = this.listServ.RatingList;
  }

  /*
  searchAnime() { //searches for anime and displays results if found
  */
  searchanime() {
    this.addSuccess = 'd-none';
    this.addError = 'd-none';
    this.errorBox = 'd-none';
    this.animeSmallDetails = 'small d-none';
    this.spinRate = 'd-none';
    this.rateVisibility = '';
    this.spinStatus = 'd-none';
    this.statusVisibility = '';
    if (this.searchinput === '') {
      this.errorMessage = 'Please enter an anime title.';
      this.errorBox = '';

    } else {
      this.http.get(`https://api.jikan.moe/v4/anime?q=${this.searchinput}&sfw`).subscribe(data => {
        if (data['data'].length === 0) {
          this.errorMessage = 'No anime found.';
          this.errorBox = '';
          this.searchBox = 'd-none';
          this.animeSmallDetails = 'small d-none';

        } else {
          this.animeInfo = data['data'][0];
          this.searchBox = '';
          this.malId = this.animeInfo.mal_id;
          this.animeSmallDetails = 'small   ';
          this.listServ.getListByUserIdAndAnimeId(this.loggedInUser.id, this.malId).subscribe(data => {
            this.listInput = data as Lists;
            this.ratingInput = this.listInput.user_rating;
            this.statusInput = this.listInput.status;
          }, error => {
            //404 not found
            if (error.status == 404) {
              this.listInput.id = -1;
            }

          }
          );
        }
      }, error => {
        this.errorMessage = 'No anime found.';
        this.errorBox = '';
        this.searchBox = 'd-none';
        this.animeSmallDetails = 'small d-none';
      },
      );

    }

  }

  /*
  addToList() { //adds anime to list  of logged in user and adds to database  if not already in database   
  */
  addanime() {
    this.addErrorMessage = 'Unable to add to your favorites!';
    this.listSend = new Lists(0, this.malId, this.loggedInUser.id, this.ratingInput, this.statusInput);
    this.listServ.addList(this.listSend).subscribe(data => {
      if (data.id != 0) {
        this.addSuccess = '';
        this.addError = 'd-none';
        this.listInput = data;
      } else {
        this.addSuccess = 'd-none';
        this.addError = '';
      }
    }, error => {
      //409 is conflict error
      if (error.status == 409) {
        this.addErrorMessage = 'It has already been added to your favorites!';

      }

      this.addSuccess = 'd-none';
      this.addError = '';
    }
    );
  }

  updateRating() {
    if (this.listInput.id <= 0) {
      return false;
    }
    this.spinRate = '';
    this.rateVisibility = 'd-none';
    this.listServ.updateRatingById(this.listInput.id, this.ratingInput).subscribe(data => {
      this.spinRate = 'd-none';
      this.rateVisibility = '';
    }, error => {
      this.spinRate = 'd-none';
      this.rateVisibility = '';
    }
    );
  }

  updateStatus() {
    if (this.listInput.id <= 0) {
      return false;
    }
    this.spinStatus = '';
    this.statusVisibility = 'd-none';
    this.listServ.updateStatusById(this.listInput.id, this.statusInput).subscribe(data => {
      this.spinStatus = 'd-none';
      this.statusVisibility = '';
    }, error => {
      this.spinStatus = 'd-none';
      this.statusVisibility = '';
    }
    );
  }
}

