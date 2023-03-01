import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private router: Router, private elementRef: ElementRef) {
  }

  spawnIndicators(): void {
    //devo spawnare un indiator a cazzo, con un delay minimo tra 2 indicator.
    //per fare le cose op, randomizzo anche colore posizione ec.
  }

  ngOnInit(): void {
    const elem = document.documentElement; // Ottiene l'elemento radice
    elem.requestFullscreen(); // Richiede la modalità fullscreen
  }
}
