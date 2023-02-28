import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { SetUpComponent } from './set-up/set-up.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { IlluminazioneEdgeComponent } from './privacyIndicators/illuminazione-edge/illuminazione-edge.component';
import { ClassicComponent } from './privacyIndicators/classic/classic.component';
import { SimpleMathComponent } from './tasks/simple-math/simple-math.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { SimpleTextComponent } from './tasks/simple-text/simple-text.component';
import { HttpServiceComponent } from './component/http-service/http-service.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskComponent } from './component/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent,
    SetUpComponent,
    FeedBackComponent,
    IlluminazioneEdgeComponent,
    ClassicComponent,
    SimpleMathComponent,
    SimpleTextComponent,
    HttpServiceComponent,
    TaskComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        HttpClientModule
    ],
  providers: [
    HttpServiceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
