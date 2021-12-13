import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { NewMessageComponent } from './messages/new-message/new-message.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  providers: [ MessagesService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
