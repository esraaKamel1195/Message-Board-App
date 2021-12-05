import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messages/:name', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
