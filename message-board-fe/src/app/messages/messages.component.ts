import { Component, OnInit } from '@angular/core';
import { Message } from './message.model'
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})

export class MessagesComponent implements OnInit {
  messages: any [] = [];

  constructor(
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.messagesService.getMessages().subscribe((res:any) => {
      this.messages = res.messages;
    });
  }
}
