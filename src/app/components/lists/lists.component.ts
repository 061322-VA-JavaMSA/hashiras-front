import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/models/lists';
import { Users } from 'src/app/models/users';
import { AnimeListService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: Lists[];
  infoList: any;
  user_id: number;
  anime_id: number;
  title: any;
  image: any;
  score: number;
  trailer: any;
  statusSelect: string;
  user_rating: number;
  loggdInUser: Users;
  constructor(private als: AnimeListService) { }

  ngOnInit(): void {
    this.user_id = 1;
    this.anime_id = 0;
    this.title = '';
    this.image = '';
    this.score = 0;
    this.trailer = '';
    this.statusSelect = '';
    this.user_rating = 0;
    this.infoList = {};
    this.lists = null;
    // this.loggdInUser = this.authServ.getLoggedInUser();
  }

  getListByUserIdAndStatus() {
 
    this.als.getListByUserIdAndStatus(this.user_id, this.statusSelect).subscribe(data => {
      this.lists = data;
      this.lists.forEach(lists => {
        this.anime_id = lists.anime_id;
        this.als.searchList(this.anime_id).subscribe(data => {
        this.title = data['data']['title'];
        this.score = data['data']['score'];
        this.trailer = data['data']['trailer']['url'];
        this.image = data['data']['images']['jpg']['image_url'];
        // console.log(this.title);
        // console.log(this.image);
        lists.title = this.title;
        lists.score = this.score;
        lists.trailer = this.trailer;
        lists.image = this.image;
        });
      });
      // console.log(this.lists);
      }, error => {
      console.log(error);
    }
    );
  }
}