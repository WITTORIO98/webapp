import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { SetUpComponent } from './set-up/set-up.component';
import { FeedBackComponent } from './feed-back/feed-back.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent,
    SetUpComponent,
    FeedBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
