import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';
  tasks = new Map<string, boolean>();
  indicators = new Map<string, boolean>();

  constructor(private router: Router, private elementRef: ElementRef) {
    this.autoRedirect('setUp');

    this.tasks.set('simpleMath', false);
    this.tasks.set('simpleText', false);
    this.indicators.set('illuminazioneEdge', false);
    this.indicators.set('classic', false);
  }

  autoRedirect(pageName: String): void {
    this.router.navigate([pageName]);
  }

  ngOnInit(): void {
    const elem = document.documentElement; // Ottiene l'elemento radice
    elem.requestFullscreen(); // Richiede la modalità fullscreen
  }
}
