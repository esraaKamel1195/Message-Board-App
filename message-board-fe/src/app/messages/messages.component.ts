import { Component, OnInit } from '@angular/core';
import { Message } from './message.model'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})

export class MessagesComponent implements OnInit {
  messages: Message [] = [
    { text: 'some text', owner: 'Tim' },
    { text: 'other message', owner: 'Jane' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
