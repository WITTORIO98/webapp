import {Component} from '@angular/core';
import {SpawnerService} from "../services/spawner.service";
import {GET, Http2Service} from "../services/http2.service";
import {EyeTrackerService, GuiType} from "../services/eye-tracker.service";

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent {
  public loading: boolean = false;
  idEsp: string | undefined;

  constructor(private spawner: SpawnerService, private http: Http2Service, private eye: EyeTrackerService) {
    http.http.get(http.getUrl(GET.newRandomIDExperiment), http.options).subscribe(data => {
      // @ts-ignore
      this.idEsp = data.id.toString();
      if (this.idEsp == null) {
        console.log("ERROR: idEsp is null");
        const randomNum = Math.floor(Math.random() * (600000 - 400000 + 1)) + 400000;
        this.idEsp = randomNum.toString();
      } else {
        console.log("idEsp: " + this.idEsp);
      }
      Http2Service.idExperiment = this.idEsp.toString();
    });
  }

  startLoading() {
    this.loading = true;
    this.launchIntoFullscreen(document.documentElement);
    this.eye.start(GuiType.DOT);

    const check = setInterval(() => {
      if (this.eye.isInitialized()) {

        this.spawner.nextStep();

        this.loading = false;
        clearInterval(check);
      }
    }, 200);
  }

  launchIntoFullscreen(element: any) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

}
