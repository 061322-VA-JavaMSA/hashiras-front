import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() loggedInUser: Users;
  isLoggedIn$: Observable<boolean>;
  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authServ.isLoggedIn;
    let user = this.authServ.getLoggedInUser();
    if (user) {
      this.loggedInUser = user;
    }

  }

  ngAfterContentInit(): void {

    this.isLoggedIn$.subscribe(res => {
      if (res) {
        this.toggleMenu();
      }
    }
    );
  }

  toggleMenu() {
    let user = this.authServ.getLoggedInUser();
    if (user) {
      this.loggedInUser = user;
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  logout() {
    this.authServ.logout();
    this.router.navigate(['login']);
  }
}

document.body.classList.toggle("dark-theme");