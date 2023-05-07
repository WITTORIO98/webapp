import {Component, OnInit} from '@angular/core';
import {SpawnerService} from "../../services/spawner.service";
import {coordinates, EyeTrackerService} from "../../services/eye-tracker.service";
import {Http2Service, POST} from "../../services/http2.service";

@Component({
  selector: 'app-accuracy-test',
  templateUrl: './accuracy-test.component.html',
  styleUrls: ['./accuracy-test.component.scss']
})
export class AccuracyTestComponent implements OnInit {
  public animationTime: number = 10000;  //ms
  public color: string = "red";

  public test: boolean = false;
  public testComplete: boolean = false;
  private startTime: number = 0;
  private errors: coordinates[] = [];
  public accuracy: number = 69;

  public minAccuracy: number = 70;
  public restart: boolean = false;

  constructor(public spawner: SpawnerService, private eye: EyeTrackerService, public http: Http2Service) {
  }

  ngOnInit(): void {
    let vars = document.querySelector('.accuracyTestVars');
    // @ts-ignore
    vars.style.setProperty('--time', this.animationTime + "ms");
  }

  startTest() {
    this.startTime = Date.now();
    this.test = true;

    const test = setInterval(() => {
      const movingElement = document.getElementById('accuracyDot');
      // @ts-ignore
      const computedStyles = window.getComputedStyle(movingElement);

      const dotPosition: coordinates = {
        x: parseInt(computedStyles.getPropertyValue('left').split(".")[0]),
        y: parseInt(computedStyles.getPropertyValue('top').split(".")[0])
      };

      const error = this.eye.getError(dotPosition);

      this.errors.push(error);
    }, 400);

    setTimeout(() => {
      this.test = !this.test;
      this.testComplete = true;
      clearInterval(test);

      this.calculateAccuracy();
    }, this.animationTime);

  }

  public calculateAccuracy() {
    let x = 0;
    let y = 0;

    this.errors.forEach((error) => {
      x += Math.abs(error.x);
      y += Math.abs(error.y);
    });

    x /= this.errors.length;
    y /= this.errors.length;

    this.accuracy = 100 - (x + y) / 2;
    this.accuracy = Math.floor(this.accuracy);

    if (this.accuracy < this.minAccuracy) {
      this.restart = true;
    } else {
      this.restart = false;
      Http2Service.experiment.accuracy.push({value: this.accuracy});
    }
  }

  continue() {
    if (this.restart) {
      this.spawner.nextStep('calibration');
    } else {
      this.spawner.nextStep();
    }
  }
}
