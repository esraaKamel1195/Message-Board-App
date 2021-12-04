import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  constructor(
    private messagesService: MessagesService
  ) { }

  ngOnInit(): void {
  }

}
