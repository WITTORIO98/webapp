import {Component, ElementRef, OnInit} from '@angular/core';
import {SpawnerService} from "./services/spawner.service";
import {Http2Service} from "./services/http2.service";

// @ts-ignore
const WebGazer: any = window.webgazer;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private elementRef: ElementRef, private spawner: SpawnerService, private http: Http2Service) {

  }


  ngOnInit(): void {
    const elem = document.documentElement; // Ottiene l'elemento radice
    elem.requestFullscreen(); //todo work?

    this.spawner.randomPage();
    this.spawner.randomIndicator();

    this.gazer();
  }

  private gazer() {
    WebGazer.setGazeListener((data: any, elapsedTime: any) => {
      if (data == null) {
        return;
      }
      console.log("X: "+data.x);//these x coordinates are relative to the viewport
      console.log("Y: "+data.y);//these y coordinates are relative to the viewport
      console.log(elapsedTime); //elapsed time is based on time since begin was called
    }).begin();

  }

}
