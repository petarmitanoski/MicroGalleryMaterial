import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {

  constructor(private user: UserService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(this.user.getLoggedIn()){
        return true;
      }
      else{
        this.router.navigate(['']);
      }
      return false;

  }
}
