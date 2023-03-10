import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";

@Component({
  selector: 'app-illuminazione-edge',
  templateUrl: './illuminazione-edge.component.html',
  styleUrls: ['./illuminazione-edge.component.scss']
})
export class IlluminazioneEdgeComponent implements OnInit, OnDestroy {
  private variables = document.querySelector('.variables');

  constructor(private http: Http2Service) {
  }

  ngOnInit(): void {
    this.http.spawnPrivacy(this.constructor.name);
    this.setVariables();
  }

  private setVariables() {
    this.variables = document.querySelector('.variables');
    let height = window.innerHeight;
    let width = window.innerWidth;
    let vw = width * 0.01;

    let xxx = height / 50;
    xxx = Math.floor(xxx);

    console.log();

    let out: string = xxx.toString() + "px";
    let lunghezzaY: number = 50 * vw;
    let lunghezzaX: number = 50 * vw;
    let yTime: number = 8;
    let xTime: number = 8;

    // @ts-ignore
    this.variables.style.setProperty('--spessore', out);
    // @ts-ignore
    this.variables.style.setProperty('--y-altezza', lunghezzaY.toString() + "px");
    // @ts-ignore
    this.variables.style.setProperty('--x-larghezza', lunghezzaX.toString() + "px");
    // @ts-ignore
    this.variables.style.setProperty('--y-time', yTime.toString() + "s");
    // @ts-ignore
    this.variables.style.setProperty('--x-time', xTime.toString() + "s");
  }

  ngOnDestroy(): void {
    this.http.despawnPrivacy(this.constructor.name);
  }

}
