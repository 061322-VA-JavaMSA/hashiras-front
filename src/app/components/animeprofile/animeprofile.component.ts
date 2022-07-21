import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimeProfile } from '../models/AnimeProfile';
import { animeService } from '../anime.service';

@Component({
  selector: 'app.animeprofile',
  templateUrl: './animeprofile.component.html',
  styleUrls: ['./animeprofile.component.css']
})
export class AnimeProfile implements OnInit {

  anime: AnimeProfile[] = [];

  constructor(private ps: AnimeProfile) { }

  ngOnInit(): void {
    this.getAnimeById();
  }

  getPokemon(){
    this.ps.getAnimeById().subscribe(
      (anime) => {
        this.anime = anime;
      },
      err => {
        console.log(err);
      }
    )
  }
}