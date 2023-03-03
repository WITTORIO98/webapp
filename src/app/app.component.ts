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

  spawnIndicators(): void {
    //devo spawnare un indiator a cazzo, con un delay minimo tra 2 indicator.
    //per fare le cose op, randomizzo anche colore posizione ec.
  }

  ngOnInit(): void {
    const elem = document.documentElement; // Ottiene l'elemento radice
    elem.requestFullscreen(); // Richiede la modalità fullscreen
    this.spawner.RandomPage();
    //this.router.navigate(this.spawner.getRandomPage());
  }
}
