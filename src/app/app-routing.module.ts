import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetUpComponent} from "./set-up/set-up.component";
import {SimpleTextComponent} from "./tasks/simple-text/simple-text.component";
import {SimpleMathComponent} from "./tasks/simple-math/simple-math.component";
import {IlluminazioneEdgeComponent} from "./privacyIndicators/illuminazione-edge/illuminazione-edge.component";
import {ClassicComponent} from "./privacyIndicators/classic/classic.component";
import {EmptyComponent} from "./util/empty/empty.component";
import {ClassicDiscoComponent} from "./privacyIndicators/classic-disco/classic-disco.component";
import {VibrationComponent} from "./privacyIndicators/vibration/vibration.component";
import {SurveyComponent} from "./pages/survey/survey.component";
import {CalibrationComponent} from "./pages/calibration/calibration.component";
import {AccuracyTestComponent} from "./pages/accuracy-test/accuracy-test.component";
import {TriviaComponent} from "./tasks/trivia/trivia.component";
import {StackGameComponent} from "./tasks/stack-game/stack-game.component";
import {EndComponent} from "./pages/end/end.component";
import {Engineer1Component} from "./tasks/softwareEngineering/engineer1/engineer1.component";
import {Engineer2Component} from "./tasks/softwareEngineering/engineer2/engineer2.component";
import {Engineer3Component} from "./tasks/softwareEngineering/engineer3/engineer3.component";

const routes: Routes = [
  {path: 'empty', component: EmptyComponent, outlet: 'outlet1'},
  {path: 'setUp', component: SetUpComponent, outlet: 'outlet1'},
  {path: 'calibration', component: CalibrationComponent, outlet: 'outlet1'},
  {path: 'accuracyTest', component: AccuracyTestComponent, outlet: 'outlet1'},
  {path: 'survey', component: SurveyComponent, outlet: 'outlet1'},
  {path: 'simple-text', component: SimpleTextComponent, outlet: 'outlet1'},
  {path: 'simple-math', component: SimpleMathComponent, outlet: 'outlet1'},
  {path: 'trivia', component: TriviaComponent, outlet: 'outlet1'},
  {path: 'stackGame', component: StackGameComponent, outlet: 'outlet1'},
  {path: 'end', component: EndComponent, outlet: 'outlet1'},
  {path: 'engineer1', component: Engineer1Component, outlet: 'outlet1'},
  {path: 'engineer2', component: Engineer2Component, outlet: 'outlet1'},
  {path: 'engineer3', component: Engineer3Component, outlet: 'outlet1'},

  {path: 'empty', component: EmptyComponent, outlet: 'outlet2'},
  {path: 'classic', component: ClassicComponent, outlet: 'outlet2'},
  {path: 'illuminazione-edge', component: IlluminazioneEdgeComponent, outlet: 'outlet2'},
  {path: 'classic-disco', component: ClassicDiscoComponent, outlet: 'outlet2'},
  {path: 'vibration', component: VibrationComponent, outlet: 'outlet2'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
