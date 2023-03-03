import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetUpComponent} from "./set-up/set-up.component";
import {SimpleTextComponent} from "./tasks/simple-text/simple-text.component";
import {SimpleMathComponent} from "./tasks/simple-math/simple-math.component";
import {IlluminazioneEdgeComponent} from "./privacyIndicators/illuminazione-edge/illuminazione-edge.component";
import {ClassicComponent} from "./privacyIndicators/classic/classic.component";
import {AppComponent} from "./app.component";
import {EmptyComponent} from "./util/empty/empty.component";

const routes: Routes = [
  {path: '', component: AppComponent, outlet: 'primary'},
  {path: 'setUp', component: SetUpComponent, outlet: 'primary'},
  {path: 'simple-text', component: SimpleTextComponent, outlet: 'primary'},
  {path: 'simple-math', component: SimpleMathComponent, outlet: 'primary'},

  {path: 'app-empty', component: EmptyComponent, outlet: 'secondary'},
  {path: 'classic', component: ClassicComponent, outlet: 'secondary'},
  {path: 'illuminazione-edge', component: IlluminazioneEdgeComponent, outlet: 'secondary'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
