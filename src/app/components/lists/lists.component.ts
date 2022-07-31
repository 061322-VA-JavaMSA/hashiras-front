import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/lists';
import { Users } from 'src/app/models/users';
import { AnimelistService } from 'src/app/services/animelist.service';
import { AuthService } from 'src/app/services/auth.service';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: List[];
  infoList: any;
  user_id: number;
  anime_id: number;
  title: any;
  image: any;
  score: number;
  trailer: any;
  statusSelect: string;
  user_rating: number;
  loggedInUser: Users;
  StatusList: any;
  RatingList: any;
  constructor(private als: AnimelistService, private authServ: AuthService, private listServ: ListsService) { }

  ngOnInit(): void {
    this.StatusList = this.listServ.StatusList;
    this.RatingList = this.listServ.RatingList;
    this.anime_id = 0;
    this.title = '';
    this.image = '';
    this.score = 0;
    this.trailer = '';
    this.statusSelect = '';
    this.user_rating = 0;
    this.infoList = {};
    this.lists = null;
    let user = this.authServ.getLoggedInUser();
    if (user) {
      this.loggedInUser = user;
      this.user_id = this.loggedInUser.id;
      this.getListByUserId();
    } else {
      this.loggedInUser = null;
      this.user_id = 0;
    }
  }
  getListByUserId() {

    this.als.getListByUserId(this.user_id).subscribe(data => {
      this.getList(data);
    }, error => {
    }
    );
  }
  getListByUserIdAndStatus() {
    if (this.statusSelect == '') {
      this.getListByUserId();
      return false;
    }
    this.als.getListByUserIdAndStatus(this.user_id, this.statusSelect).subscribe(data => {
      this.getList(data);
    }, error => {
    }
    );
  }

  getList(data: any) {
    this.lists = data;
    this.lists.forEach(lists => {
      this.anime_id = lists.anime_id;
      this.als.searchList(this.anime_id).subscribe(data => {
        this.title = data['data']['title'];
        this.score = data['data']['score'];
        this.trailer = data['data']['trailer']['url'];
        this.image = data['data']['images']['jpg']['image_url'];
        lists.title = this.title;
        lists.score = this.score;
        lists.trailer = this.trailer;
        lists.image = this.image;
        lists.status = this.StatusList.filter(x => x.id == lists.status)[0]['name'];
        let rating = (lists.user_rating == 0) ? 'Not Rated' : this.RatingList.filter(x => x.id == lists.user_rating)[0]['name'];
        lists.user_rating = rating;

      });
    });
  }
}