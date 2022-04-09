import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Array<any> = [];
  msg = '';

  constructor(private router: Router, private ms: MessageService) {
    // if (localStorage.getItem('chat')) {
    //   let msgs = localStorage.getItem('chat')
    //   if (msgs) {
    //     this.messages = JSON.parse(msgs);
    //   }
    // }
    this.messages = this.ms.chatMessages;
  }

  ngOnInit(): void {
  }

  submit(e: any) {
    if (e.keyCode === 13) { //Enter key pressed
      this.messages.push(this.msg);
      this.msg = '';
      //localStorage.setItem('chat', JSON.stringify(this.messages));
      this.ms.chatMessages = this.messages;
      console.log(this.messages)
    }
  }

  clearMsgs() {
    this.messages = [];
    this.ms.chatMessages = this.messages;
    //localStorage.clear();
  }

  showHistory() {
    this.router.navigateByUrl('/chat-history');
  }

}
