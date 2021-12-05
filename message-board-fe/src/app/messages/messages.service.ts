import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from './message.model';
@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  base_url: string = 'http://localhost:3000/api/';
  messages: Message[] = [];

  constructor(
    private http: HttpClient,
    private snakeBar: MatSnackBar
  ) {
    this.getMessages();
  }

  getMessages() {
    try{
      this.http.get<Message []>(`${this.base_url}messages`).subscribe((res) => {
        this.messages = res;
      });
    } catch(error) {
      this.handleError("Enable to get messages");
    }
  }

  postMessages(message: Message) {
    try {
      this.http.post<Message>(`${this.base_url}messages`, message).subscribe((res) => {
        this.messages.push(res);
        this.snakeBar.open('New message Posted', 'Ok', { duration: 7000 });
      });
    } catch(error) {
      this.handleError("Enable to post messages");
    }
  }

  private handleError(error: string) {
    console.error(error);
    this.snakeBar.open(error, 'Close', { duration: 7000 });
  }
}
