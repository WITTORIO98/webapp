import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Http2Service} from "../../services/http2.service";
import {AlertZone, coordinates, EyeTrackerService} from "../../services/eye-tracker.service";

@Component({
  selector: 'app-top-edge',
  templateUrl: './top-edge.component.html',
  styleUrls: ['./top-edge.component.scss']
})
export class TopEdgeComponent implements AfterViewInit, OnDestroy {
  timestamp: number = Date.now();

  constructor(private http: Http2Service, private eye: EyeTrackerService) {
  }

  ngAfterViewInit(): void {
    this.eye.setPrivacyIndicator(AlertZone.DEFAULT, 'privacyIndicator');
  }

  ngOnDestroy(): void {
    let observed = this.eye.removePrivacyIndicator();
    Http2Service.experiment.indicators.push({
      name: this.constructor.name,
      start: this.timestamp,
      end: Date.now(),
      observed: observed
    });
  }

}
