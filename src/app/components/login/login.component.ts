import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameInput: string;
  passwordInput: string;
  errorMessage: string;
  errorBox: string;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usernameInput = '';
    this.passwordInput = '';
    this.errorMessage = '';
    this.errorBox = 'd-none';
  }

  login() {

    this.authServ.login(this.usernameInput, this.passwordInput).subscribe(
      () => {
        this.errorBox = 'd-none';
        this.router.navigate(['']);
      },
      err => {
        this.errorMessage = 'Unable to login.';
        this.errorBox = '';
      }
    );
  }
}
