import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
import {ChatHistoryComponent} from "./chat-history/chat-history.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  },
  {
    path: 'chat-history',
    component: ChatHistoryComponent
  },
  {
    path: 'task-list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
