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
    let variables = {
      style: {
        innerDiameter1: 3, //vw
        innerDiameter2: 6, //vw
        border1: 6, //vw
        border2: 3, //vw
        color1: 'green',
        color2: 'yellow',
      }
    }
    /*random?*/
    this.variables = document.querySelector('.classicDiscoVariables');
    // @ts-ignore
    this.variables.style.setProperty('--innerDiameter1', variables.style.innerDiameter1 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--innerDiameter2', variables.style.innerDiameter2 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--border1', variables.style.border1 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--border2', variables.style.border2 + "vw");
    // @ts-ignore
    this.variables.style.setProperty('--color1', variables.style.color1);
    // @ts-ignore
    this.variables.style.setProperty('--color2', variables.style.color2);

    // @ts-ignore
    console.log(this.variables.style);

    this.http.spawnPrivacy(this.constructor.name, variables);
  }

  ngOnDestroy(): void {
    this.http.despawnPrivacy(this.constructor.name);
  }

}
