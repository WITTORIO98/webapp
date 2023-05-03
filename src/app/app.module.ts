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
import { VibrationComponent } from './privacyIndicators/vibration/vibration.component';
import { SurveyComponent } from './pages/survey/survey.component';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import { CalibrationComponent } from './pages/calibration/calibration.component';
import { AccuracyTestComponent } from './pages/accuracy-test/accuracy-test.component';
import { TriviaComponent } from './tasks/trivia/trivia.component';
import { StackGameComponent } from './tasks/stack-game/stack-game.component';
import { EndComponent } from './pages/end/end.component';
import { Engineer1Component } from './tasks/softwareEngineering/engineer1/engineer1.component';
import { Engineer2Component } from './tasks/softwareEngineering/engineer2/engineer2.component';
import { Engineer3Component } from './tasks/softwareEngineering/engineer3/engineer3.component';

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
    ClassicDiscoComponent,
    SurveyComponent,
    VibrationComponent,
    CalibrationComponent,
    AccuracyTestComponent,
    TriviaComponent,
    StackGameComponent,
    EndComponent,
    Engineer1Component,
    Engineer2Component,
    Engineer3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
