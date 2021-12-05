import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  base_url: string = 'http://localhost:3000/api/';
  constructor(
    private http: HttpClient
  ) { }

  getMessages() {
    return this.http.get(`${this.base_url}messages`);
  }

  postMessages(message: Message) {
    return this.http.post(`${this.base_url}messages`, message);
  }
}
