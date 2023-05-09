import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";
import {AlertZone, coordinates, EyeTrackerService} from "../../services/eye-tracker.service";

@Component({
  selector: 'app-classic-disco',
  templateUrl: './classic-disco.component.html',
  styleUrls: ['./classic-disco.component.scss']
})
export class ClassicDiscoComponent implements OnInit, OnDestroy {
  timestamp: number = Date.now();
  private variables = document.querySelector('.classicDiscoVariables');

  constructor(private http: Http2Service, private eye: EyeTrackerService) {
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

    this.http.spawnPrivacy("ClassicDiscoComponent", variables);
    this.eye.setPrivacyIndicator(AlertZone.DEFAULT,'privacyIndicator');
  }

  ngOnDestroy(): void {
    this.http.despawnPrivacy("ClassicDiscoComponent");
    let observed = this.eye.removePrivacyIndicator();
    Http2Service.experiment.indicators.push({
      name: "ClassicDiscoComponent",
      start: this.timestamp,
      end: Date.now(),
      observed: observed
    });
  }

}
