import {Injectable} from '@angular/core';

// @ts-ignore
const WebGazer: any = window.webgazer;
type coordinates = {
  x: number,
  y: number
}

export enum GuiType {
  HIDDEN,
  DOT,
  FULL
}

@Injectable({
  providedIn: 'root'
})
export class EyeTrackerService {
  private eyeCord: coordinates = {x: 100, y: 100};
  private gui: number = 0; //0 hidden, 1 dot, 2 full , >2 initialized

  private clicks: { mouseCord: coordinates, eyeCord: coordinates, timestamp: number }[] = [];

  constructor() {
  }

  public start(gui: number) {
    this.gui = gui;

    //gazeListener
    WebGazer.setGazeListener((data: any, elapsedTime: any) => {
      if (data == null) {
        return;
      }
      this.eyeCord.x = data.x;
      this.eyeCord.y = data.y;
      //console.log(elapsedTime); //elapsed time is based on time since begin was called

      if (this.gui <= (Object.keys(GuiType).length / 2)) {
        if (this.gui == GuiType.HIDDEN) {
          EyeTrackerService.setGazeVisibility("webgazerVideoContainer", false);
          EyeTrackerService.setGazeVisibility("webgazerGazeDot", false);
        }
        if (this.gui == GuiType.DOT) {
          EyeTrackerService.setGazeVisibility("webgazerVideoContainer", false);
          EyeTrackerService.setGazeVisibility("webgazerGazeDot", true);
        }
        if (this.gui == GuiType.FULL) {
          EyeTrackerService.setGazeVisibility("webgazerVideoContainer", true);
          EyeTrackerService.setGazeVisibility("webgazerGazeDot", true);
        }
        this.gui = (Object.keys(GuiType).length / 2) + 1;
      }

    }).begin();

    //mouseListener
    document.addEventListener('click', (event) => {
      let mouseCord: coordinates = {x: event.clientX, y: event.clientY};
      let timestamp: number = Date.now();
      this.clicks.push({mouseCord: mouseCord, eyeCord: this.eyeCord, timestamp: timestamp});
      this.showPrecision(this.eyeCord, mouseCord);
    });
  }

  private showPrecision(eye: coordinates, real: coordinates) {//todo migliorare
    console.debug("Real.x-Eye.x :", real.x - eye.x, "  Real.y-Eye.y :", real.y - eye.y);
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
