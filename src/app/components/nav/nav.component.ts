import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

}

document.body.classList.toggle("dark-theme");



