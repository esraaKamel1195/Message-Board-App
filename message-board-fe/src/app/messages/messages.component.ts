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

  constructor(
    public messagesService: MessagesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if( this.route.snapshot.params['name'] ) {
      console.log( this.route.snapshot.params['name'] );
    }
  }
}
