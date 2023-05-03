import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";
import {AlertZone, coordinates, EyeTrackerService} from "../../services/eye-tracker.service";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit, OnDestroy {

  constructor(private http: Http2Service, private eye: EyeTrackerService) {
  }

  ngOnInit(): void {
    this.http.spawnPrivacy(this.constructor.name);

    this.eye.setPrivacyIndicator(AlertZone.DEFAULT,'privacyIndicator');
  }

  ngOnDestroy(): void {
    this.eye.removePrivacyIndicator();
    this.http.despawnPrivacy(this.constructor.name);
  }

}
