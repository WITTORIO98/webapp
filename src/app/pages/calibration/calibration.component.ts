import {Component} from '@angular/core';
import {SpawnerService} from "../../services/spawner.service";

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent {
  public buttons: Map<string, number> = new Map([
    ['A', 0],
    ['B', 0],
    ['C', 0],
    ['D', 0],
    ['E', 0],
    ['F', 0],
    ['G', 0],
    ['H', 0],
    ['I', 0],
    ['J', 0],
    ['K', 0]
  ]);
  public numClick: number = 1;

  constructor(private spawner: SpawnerService) {
  }

  click(key: string) {
    // @ts-ignore
    this.buttons.set(key, this.buttons.get(key) + 1);

    let min = 9;
    for (let value of this.buttons.values()) {
      if (value < min) min = value;
    }

    if (min >= this.numClick) {
      this.spawner.nextStep('accuracyTest');
    }

  }
}
