import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from './message.model';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})

export class MessagesComponent implements OnInit {

  public messages: Message [] = [];

  constructor (
    public messagesService: MessagesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let name: string = this.route.snapshot.params['name'];
    this.messagesService.getMessages(name);
    this.messagesService.messageSubject.subscribe((messages: Message []) => {
      this.messages = messages;
    })
  }
}
