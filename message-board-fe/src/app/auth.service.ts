import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL: string = 'http://localhost:3000/auth';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get name() {
    return localStorage.getItem('name');
  }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register( user: any ) {
    delete user.confirmPassword;
    this.http.post<{ firstName: string, token: string }>(this.BASE_URL + '/register', user).subscribe( (res)=> {
      let authResponse = res;
      if(!authResponse.token) {
        return;
      }
      localStorage.setItem( 'token', authResponse.token );
      localStorage.setItem( 'name', authResponse.firstName );

      this.router.navigate(['/'])
    });
  }
}
