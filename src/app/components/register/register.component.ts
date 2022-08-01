import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  newUser: Users;
  submitted: boolean;
  loading: boolean;

  //
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { };

  ngOnInit(): void {
    // this.newUser = new Users();
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      // confirmPassword: ['', Validators.required, Validators.minLength(6)]
    });
    // this.registerForm = new FormGroup({});
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {


    this.submitted = true;


    this.http.post(`${environment.serverApiUrl}/users`, this.registerForm.value).subscribe(
      data => {
        this.router.navigate(['']);
      }
    );

  }


}