import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean |
  Observable<boolean> | Promise<boolean>{
    return !this.token.loggedIn();
  }

  constructor(private token: TokenService) { }
}
