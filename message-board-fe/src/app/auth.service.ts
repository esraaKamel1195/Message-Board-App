import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL: string = 'http://localhost:3000/auth';
  constructor(
    private http: HttpClient
  ) { }

  register( user: any ) {
    delete user.confirmPassword;
    this.http.post<string>(this.BASE_URL + '/register', user).subscribe( (res)=> {
      localStorage.setItem('token', res );
    });
  }
}
