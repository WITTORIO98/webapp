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

export enum AlertZone { //inteso in percentuale sulla larchezza dello schermo
  DEFAULT = 35,
  TOP = 20
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
  public clicks: { mouseCord: coordinates, eyeCord: coordinates, timestamp: number }[] = [];
  private topEdge: boolean = false;

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
        let distance = 999;
        if (this.topEdge) {
          distance = Math.abs(this.eyeCord.y - this.privacyIndicator.position.y);
        } else {
          distance = Math.sqrt(Math.pow(this.eyeCord.x - this.privacyIndicator.position.x, 2) + Math.pow(this.eyeCord.y - this.privacyIndicator.position.y, 2));
        }
        if (distance < this.privacyIndicator.radius) {
          console.log("hai guardato il privacy indicator");
          this.observed.push({timestamp: Date.now()});
          //VibrationComponent.vibrate();//debug
        }
      }

    }).begin();

    //mouseListener
    document.addEventListener('click', (event) => {
      let eyeCord: coordinates = {x: this.eyeCord.x, y: this.eyeCord.y}
      let mouseCord: coordinates = {x: event.clientX, y: event.clientY};
      let timestamp: number = Date.now();
      this.clicks.push({mouseCord: mouseCord, eyeCord: eyeCord, timestamp: timestamp});
      //this.getError(mouseCord, eyeCord);
    });
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

  public setPrivacyIndicator(radius: number, privacyId: string) {
    if (radius == AlertZone.TOP) {
      this.topEdge = true;
    }

    const privacyIndicator = document.getElementById(privacyId);
    // @ts-ignore
    const computedStyles = window.getComputedStyle(privacyIndicator);
    const position: coordinates = {
      x: parseInt(computedStyles.getPropertyValue('left').split(".")[0]),
      y: parseInt(computedStyles.getPropertyValue('top').split(".")[0])
    };

    radius = radius / 100 * window.innerWidth;

    this.privacyIndicator = {radius: radius, position: position};
    this.observed = [];
  }

  public removePrivacyIndicator() {
    this.privacyIndicator = null;
    this.topEdge = false
    return this.observed;
  }

  public getError(click: coordinates, eye?: coordinates) {
    if (eye == undefined) eye = {x: this.eyeCord.x, y: this.eyeCord.y};

    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;

    let delta: coordinates = {x: click.x - eye.x, y: click.y - eye.y};
    let error: coordinates = {x: (delta.x / windowsWidth) * 100, y: (delta.y / windowsHeight) * 100};

    //console.debug(`error.x : ${error.x} %   error.y : ${error.y} %}`);
    //console.debug(`eye.x : ${eye.x}   eye.y : ${eye.y} }`);
    //console.debug(`click.x : ${click.x}    click.y : ${click.y} }`);
    console.debug(this.clicks[this.clicks.length - 1]);
    //console.debug(this.clicks)

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

}
