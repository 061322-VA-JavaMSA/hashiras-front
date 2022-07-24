import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: Users; 

  constructor() { }

  ngOnInit(): void {
    this.newUser = new Users();
  }

  registerUser() {
    console.log(this.newUser);
  }


  


}
