import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularHomeComponent} from "./angular-home/angular-home.component";
import {SetUpComponent} from "./set-up/set-up.component";

const routes: Routes = [
  {path: 'angularHome', component: AngularHomeComponent},
  {path: 'setUp', component: SetUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
