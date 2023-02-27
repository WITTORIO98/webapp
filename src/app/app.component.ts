import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  setUp = true;
  tasks = new Map<string, boolean>();
  indicators = new Map<string, boolean>();

  constructor(private router: Router, private elementRef: ElementRef) {
    this.tasks.set('simpleMath', false);
    this.tasks.set('simpleText', false);

    this.indicators.set('illuminazioneEdge', false);
    this.indicators.set('classic', false);

    //this.spawnNewTask()
  }

  public start() {
    this.spawnNewTask();
  }

  spawnNewTask(): void {
    this.setUp = false;
    this.tasks.forEach((v, k) => {
      this.tasks.set(k, false);
    });//despowno tutto

    let rand = Math.floor(Math.random() * this.tasks.size);

    let i = 0
    this.tasks.forEach((v, k) => {
      if (i == rand) {
        this.tasks.set(k, true);
      }
      i++;
    });
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
