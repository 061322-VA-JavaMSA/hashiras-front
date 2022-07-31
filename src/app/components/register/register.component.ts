import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



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
  constructor(private formBuilder:FormBuilder,  private http: HttpClient) { };

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
 get f() {return this.registerForm.controls; }

  onSubmit() {
    console.log('here');
    console.log(this.registerForm);

    this.submitted = true;
    
    // if (this.registerForm.invalid) {
    //   return;
    // }
    this.http.post('http://localhost:8080/users', this.registerForm.value).subscribe(
      data => {
        console.log(data);
      }
    );
    // this.loading = true;
    // this.userService.registerUser(this.newUser)
      
    //     .subscribe({
    //       next: ()  => {  this.loading = false,
    //         this.submitted = false;
    //         this.registerForm.reset();
            
    //       },
    //       error: err => {
    //         console.log(err);
    //         this.loading = false;
    //       }
          
    //     });

}

 
}

