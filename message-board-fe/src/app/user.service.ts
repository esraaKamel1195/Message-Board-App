import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  BASE_URL: string = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getUser() {
    return this.http
      .get<{ firstName: string, lastName: string, email: string, password: string }>(
        this.BASE_URL + 'users/me', { headers: this.authService.tokenHeader } 
      );
  }

  saveUser(userData: {}) {
    return this.http
      .post<{ firstName: string, lastName: string, email: string, password: string }>(
        this.BASE_URL + 'users/me', userData, { headers: this.authService.tokenHeader } 
      ).subscribe( (res) => {
        localStorage.setItem( 'name', res.firstName );
      });
  }
}
