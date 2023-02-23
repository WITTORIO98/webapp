import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private router:Router, private elementRef: ElementRef) {
    this.autoRedirect('setUp');
  }
  autoRedirect(pageName:String):void{
    this.router.navigate([pageName]);
  }
  ngOnInit(): void {
    const elem = document.documentElement; // Ottiene l'elemento radice
    elem.requestFullscreen(); // Richiede la modalità fullscreen
  }
}
