import {Component} from '@angular/core';
import {SpawnerService} from "../services/spawner.service";
import {GET, Http2Service} from "../services/http2.service";

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent {
  codiceInserito: boolean = false;
  idEsp: string | undefined;

  constructor(private spawner: SpawnerService, private http: Http2Service) {
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

  refresh() {
    //chiedo al back-end se il pc è collegato todo
    if (true) {
      this.codiceInserito = true;
    }
  }

  startSp() {
    this.spawner.randomPage();
  }

}
