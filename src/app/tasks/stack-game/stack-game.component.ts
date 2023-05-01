import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";
import {SpawnerService} from "../../services/spawner.service";

@Component({
  selector: 'app-stack-game',
  templateUrl: './stack-game.component.html',
  styleUrls: ['./stack-game.component.scss']
})
export class StackGameComponent implements OnInit, OnDestroy {

  constructor(private http: Http2Service, private spawner: SpawnerService) {
  }

  nextStep(): void {
    this.spawner.nextStep();
  }

  ngOnInit(): void {
    this.http.spawnTask(this.constructor.name);
  }

  ngOnDestroy(): void {
    this.http.despawnTask(this.constructor.name);
  }

}
