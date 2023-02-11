import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularHomeComponent} from "./angular-home/angular-home.component";

const routes: Routes = [
  {path: 'a', component: AngularHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
