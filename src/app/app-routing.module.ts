import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetUpComponent} from "./set-up/set-up.component";

const routes: Routes = [
  {path: 'setUp', component: SetUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
