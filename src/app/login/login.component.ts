import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required]);

  private username: string;
  private password: string;
  private userLoggedIn: boolean;
  private userId: string;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : '';
  }

  constructor(private router: Router, private user: UserService) { 
    
  }

  ngOnInit() {
    this.username = "";
    this.password = "";
    this.userLoggedIn = false;
    this.userId = "1";
  }

  submitLogin(){
    if(this.username == "" && this.password == ""){
      this.user.setLoggedIn(true);
      this.router.navigate(['album']);
    }
  }

}
