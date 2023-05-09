import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";
import {SpawnerService} from "../../services/spawner.service";

@Component({
  selector: 'app-stack-game',
  templateUrl: './stack-game.component.html',
  styleUrls: ['./stack-game.component.scss']
})
export class StackGameComponent implements OnInit, OnDestroy {
  timestamp: number = Date.now();

  constructor(private http: Http2Service, private spawner: SpawnerService) {
  }

  nextStep(): void {
    this.spawner.nextStep('calibration');
  }

  ngOnInit(): void {
    this.http.spawnTask("StackGameComponent");
  }

  ngOnDestroy(): void {
    this.http.despawnTask("StackGameComponent");
    Http2Service.experiment.tasks.push({
      name: "StackGameComponent",
      start: this.timestamp,
      end: Date.now()
    });
  }

}
