//need this start
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
//need this end

async function getCurrentSeason(data){
  let response = await fetch('https://api.jikan.moe/v4/seasons/now', {
    method: 'GET',
    credentials: 'same-origin'
  });
  if(response.ok){
    let data = await response.json();

    console.log(response);

    // populateTable(data);
  } else {
    console.log('error');
  }
}