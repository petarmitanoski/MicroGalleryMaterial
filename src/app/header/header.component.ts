import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean{
    return this.user.getLoggedIn();
  }

  logOut(){
    this.user.setLoggedIn(false);
  }
}