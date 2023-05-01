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
  private gui: number = GuiType.HIDDEN; //<0 initialized

  private clicks: { mouseCord: coordinates, eyeCord: coordinates, timestamp: number }[] = [];

  constructor() {
  }

  public start(gui: number) {
    this.gui = gui;

    //gazeListener
    WebGazer.setGazeListener((data: any, elapsedTime: any) => {
      if (data == null) return;

      this.eyeCord.x = data.x;
      this.eyeCord.y = data.y;
      //console.log(elapsedTime); //elapsed time is based on time since begin was called

      if (this.gui >= 0) {
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
        this.gui = -1;
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

  private showPrecision(eye: coordinates, click: coordinates) {
    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;

    let delta: coordinates = {x: click.x - eye.x, y: click.y - eye.y};
    let precision: coordinates = {x: (delta.x / windowsWidth) * 100, y: (delta.y / windowsHeight) * 100};

    console.debug("Precision.x :", precision.x, "%", " Precision.y :", precision.y, "%");

    /*console.debug("WindowsHeight :", windowsHeight, " WindowsWidth :", windowsWidth);
    console.debug("click.x-Eye.x :", delta.x, "  click.y-Eye.y :", delta.y);
    console.debug("Eye.x :", eye.x, " Eye.y :", eye.y);
    console.debug("Eye.x :", click.x, " Eye.y :", click.y);*/
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
