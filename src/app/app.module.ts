import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { SetUpComponent } from './set-up/set-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent,
    SetUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
