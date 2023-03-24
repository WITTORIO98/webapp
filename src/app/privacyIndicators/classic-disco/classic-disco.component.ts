import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";

@Component({
  selector: 'app-classic-disco',
  templateUrl: './classic-disco.component.html',
  styleUrls: ['./classic-disco.component.scss']
})
export class ClassicDiscoComponent implements OnInit, OnDestroy {
  private variables = document.querySelector('.classicDiscoVariables');

  constructor(private http: Http2Service) {
  }

  ngOnInit(): void {
    /*random?*/
    let innerDiameter1: number = 3; //vw
    let innerDiameter2: number = 6; //vw
    let border1: number = 6; //vw
    let border2: number = 3; //vw
    let color1: string = 'green';
    let color2: string = 'yellow';
    /*random?*/
    this.variables = document.querySelector('.classicDiscoVariables');
    // @ts-ignore
    this.variables.style.setProperty('--innerDiameter1', innerDiameter1 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--innerDiameter2', innerDiameter2 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--border1', border1 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--border2', border2 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--color1', color1);
    // @ts-ignore
    this.variables.style.setProperty('--color2', color2);

    this.http.spawnPrivacy(this.constructor.name);
  }

  ngOnDestroy(): void {
    this.http.despawnPrivacy(this.constructor.name);
  }

}
