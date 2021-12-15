import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  BASE_URL: string = 'http://localhost:3000/auth/';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // getUser() {
  //   return this.http
  //     .get(this.BASE_URL + '/users/me', { Headers : this.authService.tokenHeader()}).pipe()
  //     .map((res) => res.json());
  // }

  // saveUser(userData) {
  //   return this.http
  //     .post(this.BASE_URL + '/users/me', userData, this.authService.tokenHeader)
  //     .map((res) => res.json());
  // }
}
