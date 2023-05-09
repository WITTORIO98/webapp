import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";
import {AlertZone, coordinates, EyeTrackerService} from "../../services/eye-tracker.service";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit, OnDestroy {
  timestamp: number = Date.now();

  constructor(private http: Http2Service, private eye: EyeTrackerService) {
  }

  ngOnInit(): void {
    this.http.spawnPrivacy("ClassicComponent");

    this.eye.setPrivacyIndicator(AlertZone.DEFAULT, 'privacyIndicator');
  }

  ngOnDestroy(): void {
    this.http.despawnPrivacy("ClassicComponent");
    let observed = this.eye.removePrivacyIndicator();
    Http2Service.experiment.indicators.push({
      name: "ClassicComponent",
      start: this.timestamp,
      end: Date.now(),
      observed: observed
    });
  }

}
