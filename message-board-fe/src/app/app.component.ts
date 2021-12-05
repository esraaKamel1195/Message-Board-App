import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'message-board-fe';

  @ViewChild(MessagesComponent) messages: MessagesComponent | any;

  onPosted(message: any) {
    this.messages.messages.push(message);
  }
}
