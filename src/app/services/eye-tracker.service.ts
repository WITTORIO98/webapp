import {Injectable} from '@angular/core';

// @ts-ignore
const WebGazer: any = window.webgazer;
type coordinates = {
  x: number,
  y: number
}

@Injectable({
  providedIn: 'root'
})
export class EyeTrackerService {
  private eyeCord: coordinates = {x: 100, y: 100}
  private initialized: boolean = false;

  private clicks: { mouseCord: coordinates, eyeCord: coordinates, timestamp: number }[] = [];

  constructor() {
  }

  public start(gui?: boolean) {
    if (gui) {
      this.initialized = true;
    }
    //gazeListener
    WebGazer.setGazeListener((data: any, elapsedTime: any) => {
      if (data == null) {
        return;
      }
      this.eyeCord.x = data.x;
      this.eyeCord.y = data.y;
      //console.log(elapsedTime); //elapsed time is based on time since begin was called

      if (!this.initialized) {
        EyeTrackerService.setGazeVisibility("webgazerVideoContainer", false);
        EyeTrackerService.setGazeVisibility("webgazerGazeDot", false);

        this.initialized = !this.initialized;
      }

    }).begin();

    //mouseListener
    document.addEventListener('click', (event) => {
      let mouseCord: coordinates = {x: event.clientX, y: event.clientY};
      let timestamp: number = new Date().getTime();
      this.clicks.push({mouseCord: mouseCord, eyeCord: this.eyeCord, timestamp: timestamp});
      this.showPrecision(this.eyeCord, mouseCord);
    });
  }

  private showPrecision(eye: coordinates, real: coordinates) {//todo migliorare
    console.log("Real.x-Eye.x :", real.x - eye.x, "  Real.y-Eye.y :", real.y - eye.y);
  }

  static setGazeVisibility(target: string, value: boolean): void {
    if (target == "webgazerVideoContainer") {
      // @ts-ignore
      let webgazerVideoContainerStyle = document.getElementById("webgazerVideoContainer").style;
      if (value == false) {
        webgazerVideoContainerStyle.setProperty('opacity', '0');
        webgazerVideoContainerStyle.setProperty('pointer-events', 'none');
      } else {
        webgazerVideoContainerStyle.setProperty('opacity', '1');
      }
    }
    if (target == "webgazerGazeDot") {
      // @ts-ignore
      let webgazerGazeDotStyle = document.getElementById("webgazerGazeDot").style;
      if (value == false) {
        webgazerGazeDotStyle.setProperty('opacity', '0');
        webgazerGazeDotStyle.setProperty('pointer-events', 'none');
      } else {
        webgazerGazeDotStyle.setProperty('opacity', '1');
      }
    }
  }

  private toViewport(abs: coordinates): coordinates {
    let width = window.innerWidth;
    let height = window.innerHeight;
    return {x: (abs.x / width) * 100, y: (abs.y / height) * 100};
  }

  public getEyeCord() {
    return this.toViewport(this.eyeCord);
  }

  public getX() {
    return this.getEyeCord().x;
  }

  public getY() {
    return this.getEyeCord().y;
  }

}
