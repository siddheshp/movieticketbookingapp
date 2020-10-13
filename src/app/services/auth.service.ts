import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  isLoggedIn(): boolean {
    return this.getToken() != null;
    //T
    //F
  }

  getToken() {
    return localStorage.getItem('token');
  }

  user = new Subject<User>();

  constructor(private httpClient: HttpClient) { }

  logout() {
    localStorage.clear();
    this.user.next(new User());
  }

  signup(user: User) {
    let url = "http://localhost:7070/movie_app/v1/customers";
    return this.httpClient.post<User>(url, user);
  }

  signin(credentials) {
    let url = 'http://localhost:7070/movie_app/v1/access-tokens';
    return this.httpClient.post(url, credentials).pipe(catchError(this.errorHandler),
      tap((response: User) => {
        this.saveUser(response);
        this.user.next(response);
      }));
  }

  private saveUser(user: User) {
    localStorage.setItem('token', user.jwtToken);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private errorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'Error!'; // ideally all errors must be handled and there has to be meaning ful description
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    if (errorRes.error && errorRes.error.error) {
      errorMessage = errorRes.error.error;
    }

    return throwError(errorMessage);
  }
}
