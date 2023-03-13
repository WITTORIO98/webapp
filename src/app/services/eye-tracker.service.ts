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

  constructor() {
  }

  public start() {
    //gazeListener
    WebGazer.setGazeListener((data: any, elapsedTime: any) => {
      if (data == null) {
        return;
      }
      this.eyeCord.x = data.x;    //these x coordinates are relative to the viewport
      this.eyeCord.y = data.y;    //these y coordinates are relative to the viewport
      //console.log(elapsedTime); //elapsed time is based on time since begin was called

      if (!this.initialized) {
        // @ts-ignore
        let webgazerVideoContainerStyle = document.getElementById("webgazerVideoContainer").style;
        // @ts-ignore
        let webgazerGazeDotStyle = document.getElementById("webgazerGazeDot").style;

        webgazerVideoContainerStyle.setProperty('opacity', '0');
        webgazerVideoContainerStyle.setProperty('pointer-events', 'none');

        webgazerGazeDotStyle.setProperty('opacity', '0');
        webgazerGazeDotStyle.setProperty('pointer-events', 'none');
      }
    }).begin();

    //mouseListener
    document.addEventListener('click', (event) => {
      let mouseCord: coordinates = {x: event.clientX, y: event.clientY}
    });

  }


  }

  public getCoord() {
    return this.eyeCord;
  }

  public getX() {
    return this.eyeCord.x;
  }

  public getY() {
    return this.eyeCord.y;
  }


}
