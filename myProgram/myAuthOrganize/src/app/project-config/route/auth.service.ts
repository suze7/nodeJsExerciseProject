import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(false).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = false)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
