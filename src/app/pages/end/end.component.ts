import {Component, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";
import {EyeTrackerService} from "../../services/eye-tracker.service";

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  constructor(private http: Http2Service, private eye: EyeTrackerService) {
  }

  exitFullScreen() {
    let element: any = document;

    if (element.exitFullscreen) {
      element.exitFullscreen();
    } else if (element.mozCancelFullScreen) {
      element.mozCancelFullScreen();
    } else if (element.webkitExitFullscreen) {
      element.webkitExitFullscreen();
    }
  }

  ngOnInit(): void {
    Http2Service.experiment.ended = true;
    Http2Service.experiment.clicks = this.eye.clicks;
    this.http.sendData();
  }
}
