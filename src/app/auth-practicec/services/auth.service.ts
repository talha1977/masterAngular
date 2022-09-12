import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    console.log(this.getToken() !== null);
    return this.getToken() !== null;
  }
  login({ username, password }: any): Observable<any> {
    if (username == 'talha' && password == 'talha') {
      this.setToken('abc');
      return of({ username, password });
    }
    return throwError(new Error('username password incorrect'));
  }
}
