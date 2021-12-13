import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from './message.model';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  base_url: string = 'http://localhost:3000/api/';
  private messagesStore: Message [] = [];
  public messageSubject = new Subject<Message []>();

  public messages: Observable< Message[] > = this.messageSubject.asObservable();
  
  constructor(
    private http: HttpClient,
    private snakeBar: MatSnackBar
  ) {
    this.getMessages(null);
  }

  getMessages(user: string | null) {    
      let username = (user)? '/' + user: '';
      this.http.get<Message []>(`${this.base_url}messages${username}`).subscribe((res)=> {
        this.messagesStore = res;
        this.messageSubject.next(this.messagesStore);
      }, error => {
        this.handleError("Enable to get messages");
      });
  }

  getMessagesByName( user: string ) {    
    try {
      let username = (user)? '/' + user: '';
      this.http.get<Message []>(`${this.base_url}messages${username}`).subscribe((res) => {
        this.messagesStore = res;
        this.messageSubject.next(this.messagesStore);
      });
    } catch(error) {
      this.handleError("Enable to get messages");
    }
  }

  postMessages(message: Message) {
    try {
      this.http.post<Message>(`${this.base_url}messages`, message).subscribe((res) => {
        this.messagesStore.push(res);
        this.messageSubject.next(this.messagesStore);
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
