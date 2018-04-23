import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // const url = state.url;
    console.log('AuthGuard#canActivate called');
    return (new Promise((s, j) => {
      setTimeout(s, 100);
    })).then(() => false);
  }

  checkLogin(url: string): Observable<boolean> {
    // if (this.authService.isLoggedIn) {
    //   return true;
    // }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    // this.router.navigate(['/login']);
    return this.authService.login();
  }
}
