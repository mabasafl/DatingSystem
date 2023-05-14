import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { MemberDetailsComponent } from './components/routes/members/member-details/member-details.component';
import { MemberListComponent } from './components/routes/members/member-list/member-list.component';
import { ListsComponent } from './components/routes/lists/lists.component';
import { MessagesComponent } from './components/routes/messages/messages.component';
import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent, 
    NavComponent, 
    HomeComponent, 
    RegisterComponent,
    MemberDetailsComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
