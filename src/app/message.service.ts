import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  chatMessages: Array<string> = [];

  constructor() { }
}
