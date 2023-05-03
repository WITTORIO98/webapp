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
  public initialized: boolean = false;

  codiceInserito: boolean = false;
  idEsp: string | undefined;

  constructor(private spawner: SpawnerService, private http: Http2Service, private eye: EyeTrackerService) {
    http.http.get(http.getUrl(GET.newRandomIDExperiment), http.options).subscribe(data => {
      // @ts-ignore
      this.idEsp = data.id.toString();
      if (this.idEsp == null) {
        console.log("ERROR: idEsp is null");
        this.idEsp = "696969";
      }
      Http2Service.idExperiment = this.idEsp.toString();
    });
  }

  startLoading() {
    //logo caricamento
    this.launchIntoFullscreen(document.documentElement);
    this.eye.start(GuiType.DOT);

    const check = setInterval(() => {
      if (this.eye.isInitialized()) {
        this.initialized = true;
        clearInterval(check);
      }
    }, 200);
  }

  refresh() {
    //chiedo al back-end se il pc è collegato todo
    if (true) {
      this.codiceInserito = true;
    }
  }

  startSp() {
    this.spawner.nextStep();
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
