import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";

@Component({
  selector: 'app-illuminazione-edge',
  templateUrl: './illuminazione-edge.component.html',
  styleUrls: ['./illuminazione-edge.component.scss']
})
export class IlluminazioneEdgeComponent implements OnInit, OnDestroy {
  timestamp: number = Date.now();
  private variables = document.querySelector('.illuminazioneEdgeVariables');
  private animations: string[] = ["toDown", "toRight", "toUp", "toLeft"];
  private lastAnimation: number = 4;

  private interval: any;
  private timer: any;

  constructor(private http: Http2Service) {
  }

  ngOnInit(): void {
    this.http.spawnPrivacy("IlluminazioneEdgeComponent");
    this.manageAnimation();
  }

  private manageAnimation() {
    let velocity: number = 300; // px/s
    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;
    let vw = windowsWidth * 0.01;
    let length = 50 * vw;

    let yPartialTime = (windowsHeight / velocity) * 1000;
    let xPartialTime = (windowsWidth / velocity) * 1000;
    let despawnDelay = (length / velocity) * 1000;
    let yTotalTime = yPartialTime + despawnDelay;
    let xTotalTime = xPartialTime + despawnDelay;


    let nonGiudicarmi = true;
    if (nonGiudicarmi) {
      this.spawnNextAnimation(despawnDelay);
      this.timer = setTimeout(() => {
        this.spawnNextAnimation(despawnDelay);
        this.timer = setTimeout(() => {
          this.spawnNextAnimation(despawnDelay);
          this.timer = setTimeout(() => {
            this.spawnNextAnimation(despawnDelay);
          }, yPartialTime);
        }, xPartialTime);
      }, yPartialTime);
      this.interval = setInterval(() => {
        this.spawnNextAnimation(despawnDelay);
        this.timer = setTimeout(() => {
          this.spawnNextAnimation(despawnDelay);
          this.timer = setTimeout(() => {
            this.spawnNextAnimation(despawnDelay);
            this.timer = setTimeout(() => {
              this.spawnNextAnimation(despawnDelay);
            }, yPartialTime);
          }, xPartialTime);
        }, yPartialTime);
      }, (yPartialTime + xPartialTime) * 2);
    }


    this.variables = document.querySelector('.illuminazioneEdgeVariables');
    // @ts-ignore
    this.variables.style.setProperty('--y-time', yTotalTime / 1000 + "s");
    // @ts-ignore
    this.variables.style.setProperty('--x-time', xTotalTime / 1000 + "s");
    // @ts-ignore
    this.variables.style.setProperty('--length', length + "px");
  }

  private spawnNextAnimation(despawnDelay: number): void {
    let next: number = this.lastAnimation + 1;
    if (this.lastAnimation >= 3) {
      next = 0;
      this.lastAnimation = 3;
    }

    let elem = this.animations[this.lastAnimation];
    setTimeout(() => {
      // @ts-ignore
      document.getElementById(elem)?.classList.remove(elem);
    }, despawnDelay);
    // @ts-ignore
    document.getElementById(this.animations[next]).classList.add(this.animations[next]);

    this.lastAnimation = next;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.http.despawnPrivacy("IlluminazioneEdgeComponent");
    Http2Service.experiment.indicators.push({
      name: "IlluminazioneEdgeComponent",
      start: this.timestamp,
      end: Date.now(),
    });
  }

}
