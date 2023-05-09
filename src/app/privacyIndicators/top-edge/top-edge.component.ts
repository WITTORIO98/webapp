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
  updatePosition: any = undefined;

  constructor(private http: Http2Service, private eye: EyeTrackerService) {
  }

  ngAfterViewInit(): void {
    this.updatePosition = setInterval(() => {
      this.eye.setPrivacyIndicator(AlertZone.DEFAULT, 'privacyIndicator');
    }, 300);

  }

  ngOnDestroy(): void {
    clearInterval(this.updatePosition);
    let observed = this.eye.removePrivacyIndicator();
    Http2Service.experiment.indicators.push({
      name: "TopEdgeComponent",
      start: this.timestamp,
      end: Date.now(),
      observed: observed
    });
  }

}
