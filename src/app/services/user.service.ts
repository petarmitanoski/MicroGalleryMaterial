import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private loggedIn: boolean;
  private userId: number;
  private username: string;
  private data: {};

  constructor() { 
    this.loggedIn = false;
    this.userId = 1;
    this.username = "";
  }

  setLoggedIn(value: boolean): void{
    this.loggedIn = value;
  }  

  getLoggedIn(): boolean{
    return this.loggedIn;
  }

  getUserId(): number{
    return this.userId;
  }

  setUsername( enteredUsername: string): void{
    this.username = enteredUsername;
  }

  getUsername(): string{
    return this.username;
  }

  setData(data: any){
    this.data = data;
  }

  getData(){
    return this.data;
  }
  
}
