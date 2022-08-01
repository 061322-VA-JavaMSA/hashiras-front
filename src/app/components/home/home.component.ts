import { Component, OnInit } from '@angular/core';
import { AnimeList, Lists } from 'src/app/models/lists';
import { AnimelistService } from 'src/app/services/animelist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: AnimeList[];

  image: any;
  title: any;
  score: number;
  trailer: any;
  year: number;
  season: string;
  yearSelect: any;
  seasonSelect: any;

  constructor(private als: AnimelistService) { }

  ngOnInit(): void {
    this.image = '';
    this.title = '';
    this.score = 0;
    this.trailer = '';
    this.year = 0;
    this.season = '';
    this.yearSelect = '';
    this.seasonSelect = '';
  }
  browseBySeason() {
    // this.year = 2022;
    // this.season = 'summer';
    console.log(this.yearSelect);
    console.log(this.seasonSelect);
    this.als.browseBySeason(this.yearSelect, this.seasonSelect).subscribe((data: Lists[]) => {
      this.home = []
      console.log(data);
      for (const item of data['data']) {
        this.home.push(
          new AnimeList(
            item['mal_id'],
            item['images']['jpg']['image_url'],
            item['title'],
            item['score'],
            item['trailer']['url'],
            0,
            ''
          ));
      };
    }, error => {
      console.log(error);
    }
    );
  }
}