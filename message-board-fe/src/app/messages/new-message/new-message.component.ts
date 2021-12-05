import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})

export class NewMessageComponent implements OnInit {
  message: Message = { owner: '', text: '' };

  constructor(
    private messagesService: MessagesService
  ) { }

  ngOnInit(): void {
  }

  post() {
    this.messagesService.postMessages(this.message);
  }
}
