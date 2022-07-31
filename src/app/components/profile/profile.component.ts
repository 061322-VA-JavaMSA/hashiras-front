import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateForm: FormGroup;
  sendString: String;
  msgBoxSuccess: String;
  msgBoxError: String;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authServ: AuthService, private userServe: UserService) { }
  ngOnInit(): void {
    let user = this.authServ.getLoggedInUser();
    this.sendString = '';
    this.updateForm = this.formBuilder.group({
      fname: [user.fname, Validators.required],
      lname: [user.lname, Validators.required],
      email: [user.email, Validators.required],
      password: ['', Validators.required],
      id: [user.id],
    });
    this.msgBoxSuccess = 'd-none';
    this.msgBoxError = 'd-none';
  }
  onSubmit() {

    this.sendString = '';
    this.msgBoxSuccess = 'd-none';
    this.msgBoxError = 'd-none';
    Object.keys(this.updateForm.value).forEach((value, key) => {
      this.sendString += value + '=' + this.updateForm.value[value] + '&';
    });

    this.userServe.updateUseryId(this.sendString).subscribe(res => {
      this.msgBoxSuccess = '';
    }, err => {
      this.msgBoxError = '';
    });
  }
}
