import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';

  constructor(private router:Router) {
    this.autoRedirect('angularHome');
  }
  autoRedirect(pageName:String):void{
    this.router.navigate([pageName]);
  }
}
