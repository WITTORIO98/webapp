import {Component, ElementRef, OnInit} from '@angular/core';
import {SpawnerService} from "./services/spawner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private elementRef: ElementRef, private spawner: SpawnerService) {
  }

  ngOnInit(): void {
    const elem = document.documentElement; // Ottiene l'elemento radice
    elem.requestFullscreen(); //todo work?

    this.spawner.randomPage();
    this.spawner.randomIndicator();
  }
}
