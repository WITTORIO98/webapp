import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SetUpComponent} from './set-up/set-up.component';
import {FeedBackComponent} from './feed-back/feed-back.component';
import {IlluminazioneEdgeComponent} from './privacyIndicators/illuminazione-edge/illuminazione-edge.component';
import {ClassicComponent} from './privacyIndicators/classic/classic.component';
import {SimpleMathComponent} from './tasks/simple-math/simple-math.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {SimpleTextComponent} from './tasks/simple-text/simple-text.component';
import {HttpClientModule} from "@angular/common/http";
import { EmptyComponent } from './util/empty/empty.component';
import { ClassicDiscoComponent } from './privacyIndicators/classic-disco/classic-disco.component';

@NgModule({
  declarations: [
    AppComponent,
    SetUpComponent,
    FeedBackComponent,
    IlluminazioneEdgeComponent,
    ClassicComponent,
    SimpleMathComponent,
    SimpleTextComponent,
    EmptyComponent,
    ClassicDiscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
