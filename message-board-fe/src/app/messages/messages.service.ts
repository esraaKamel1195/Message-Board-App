import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  base_url: string = 'http://localhost:3000/api/';
  messages: Message[] = [];

  constructor(
    private http: HttpClient
  ) { 
    this.getMessages();
  }

  getMessages() {
    this.http.get<Message []>(`${this.base_url}messages`).subscribe((res) => {
      this.messages = res;
    });
  }

  postMessages(message: Message) {
    this.http.post<Message>(`${this.base_url}messages`, message).subscribe((res) => {
      this.messages.push(res);
    });
  }
}
