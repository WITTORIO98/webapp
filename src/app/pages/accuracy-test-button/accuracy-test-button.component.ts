import {Component} from '@angular/core';
import {SpawnerService} from "../../services/spawner.service";
import {coordinates, CoordType, EyeTrackerService} from "../../services/eye-tracker.service";

@Component({
  selector: 'app-accuracy-test-button',
  templateUrl: './accuracy-test-button.component.html',
  styleUrls: ['./accuracy-test-button.component.scss']
})
export class AccuracyTestButtonComponent {

  public buttons: Map<string, number> = new Map([
    ['A', 0],
    ['D', 0],
    ['F', 0],
    ['H', 0],
    ['K', 0]
  ]);
  public numClick: number = 1;

  public errors: coordinates[] = [];
  public maxError: number = 30;

  constructor(private spawner: SpawnerService, private eye: EyeTrackerService) {
  }

  click(key: string) {
    // @ts-ignore
    this.buttons.set(key, this.buttons.get(key) + 1);

    let lastClick = this.eye.clicks[this.eye.clicks.length - 1];
    let error: coordinates = this.eye.getError(lastClick.mouseCord, lastClick.eyeCord);
    console.log(error);

    if (this.buttons.get(key) == 0) {
      this.errors.push(error);
    }

    let allCLicked: boolean = true;
    this.buttons.forEach((value, key) => {
      if (value == 0) {
        allCLicked = false;
      }
    });

    if (allCLicked) {
      if (this.getError() <= this.maxError) {
        this.spawner.nextStep();
      } else {
        this.spawner.routerNav(['calibration'])
      }
    }

  }

  private getError() {
    let out;
    let dx: number;
    let dy: number;
    this.errors.forEach((value, index) => {
      dx += Math.abs(value.x);
      dy += Math.abs(value.y);
    });
    //let avgX = dx / this.errors.length;
    //let avgY = dy / this.errors.length;

    let avgY = 29;//cancella
    return avgY;//todo miglliorare
  }
}
