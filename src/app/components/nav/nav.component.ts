import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() loggedInUser: Users;
  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.authServ.getLoggedInUser();
    console.log(this.loggedInUser);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  logout() {
    console.log('logout()')
    this.authServ.logout();
    this.router.navigate(['login']);
  }
}

document.body.classList.toggle("dark-theme");



