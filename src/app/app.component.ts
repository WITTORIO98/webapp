import {Component, ElementRef, OnInit} from '@angular/core';
import {SpawnerService} from "./services/spawner.service";
import {Http2Service, POST} from "./services/http2.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private elementRef: ElementRef, private spawner: SpawnerService, private http: Http2Service) {
  }

  ngOnInit(): void {
    const elem = document.documentElement; // Ottiene l'elemento radice
    elem.requestFullscreen(); //todo work?

    this.spawner.randomPage();
    this.spawner.randomIndicator();

  }
}
