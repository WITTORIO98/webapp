import {Injectable} from '@angular/core';
import {VibrationComponent} from "../privacyIndicators/vibration/vibration.component";
import {Http2Service} from "./http2.service";

// @ts-ignore
const WebGazer: any = window.webgazer;
export type coordinates = {
  x: number,
  y: number
}

export enum GuiType {
  HIDDEN,
  DOT,
  FULL
}

export enum CoordType {
  ABSOLUTE,
  ToWIEWPORT
}

export enum AlertZone {
  DEFAULT = 100
}

@Injectable({
  providedIn: 'root'
})
export class EyeTrackerService {
  private eyeCord: coordinates = {x: 100, y: 100};
  private initialized: boolean = false;
  private gui: number = GuiType.HIDDEN;
  private privacyIndicator: { radius: number, position: coordinates } | null = null;
  public observed: { timestamp: number }[] = []
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

      if (!this.initialized) {
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
        this.initialized = true;
      }
      if (this.privacyIndicator) {//cosi è solo per debug, salvare quando sto guardando il privacy indicator todo
        let distance = Math.sqrt(Math.pow(this.eyeCord.x - this.privacyIndicator.position.x, 2) + Math.pow(this.eyeCord.y - this.privacyIndicator.position.y, 2));
        if (distance < this.privacyIndicator.radius) {
          //console.log("hai guardato il privacy indicator");
          this.observed.push({timestamp: Date.now()});
          //VibrationComponent.vibrate();
        }
      }

    }).begin();

    //mouseListener
    document.addEventListener('click', (event) => {
      let mouseCord: coordinates = {x: event.clientX, y: event.clientY};
      let timestamp: number = Date.now();
      this.clicks.push({mouseCord: mouseCord, eyeCord: this.eyeCord, timestamp: timestamp});
      this.getError(mouseCord, this.eyeCord);
    });
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

  public setPrivacyIndicator(radius: number, privacyId: string) {
    const privacyIndicator = document.getElementById(privacyId);
    // @ts-ignore
    const computedStyles = window.getComputedStyle(privacyIndicator);
    const position: coordinates = {
      x: parseInt(computedStyles.getPropertyValue('left').split(".")[0]),
      y: parseInt(computedStyles.getPropertyValue('top').split(".")[0])
    };

    this.privacyIndicator = {radius: radius, position: position};
    this.observed = [];
  }

  public removePrivacyIndicator() {
    this.privacyIndicator = null;
    return this.observed;
  }

  public getError(click: coordinates, eye?: coordinates) {
    if (eye == undefined) eye = this.eyeCord;

    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;

    let delta: coordinates = {x: click.x - eye.x, y: click.y - eye.y};
    let error: coordinates = {x: (delta.x / windowsWidth) * 100, y: (delta.y / windowsHeight) * 100};

    //console.debug(`error.x : ${error.x} %   error.y : ${error.y} %}`);

    return error;
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

  public getEyeCord(format?: number) {
    if (format == CoordType.ToWIEWPORT) return this.toViewport(this.eyeCord);

    return this.eyeCord;
  }

}
