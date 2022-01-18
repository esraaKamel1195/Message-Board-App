import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  BASE_URL: string = 'http://localhost:3000/auth/';
  
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

  get tokenHeader() {
    let Heeders: HttpHeaders = new HttpHeaders().set( 
      'Authorization', 'Bearer ' + localStorage.getItem('token')
    );
    return Heeders;
  }

  register( user: any ): void {
    delete user.confirmPassword;
    this.http.post<{ firstName: string, token: string }>(
      this.BASE_URL + 'register', user).subscribe( (res)=> {
        this.authenticate(res);
    });
  }

  login( user: any): void {
    this.http.post<{ firstName: string, token: string }>(
      this.BASE_URL + 'login', user).subscribe((res) => {
        this.authenticate(res);
    })
  }

  logout(): void {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
  }

  authenticate(res: { firstName: string, token: string }): void {
    let authResponse = res;
    if(!authResponse.token) {
      return;
    }
    localStorage.setItem( 'token', authResponse.token );
    localStorage.setItem( 'name', authResponse.firstName );

    this.router.navigate(['/']);
  }
}
