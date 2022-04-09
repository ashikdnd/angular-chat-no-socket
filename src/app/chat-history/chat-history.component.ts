import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {
  messages: Array<string> = [];
  constructor(private ms: MessageService) {
    // if (localStorage.getItem('chat')) {
    //   let msgs = localStorage.getItem('chat');
    //   if (msgs) {
    //     this.messages = JSON.parse(msgs);
    //   }
    // }
    this.messages = this.ms.chatMessages;
  }

  ngOnInit(): void {
  }

}
