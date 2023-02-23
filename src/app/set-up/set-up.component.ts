import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent {
  constructor(private router:Router) {
  }
  goToPage(pageName:String):void{
    this.router.navigate([pageName]);
  }
}
