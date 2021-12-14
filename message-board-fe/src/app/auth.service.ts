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
    this.http.post(this.BASE_URL + '/register', user).subscribe();
  }
}
