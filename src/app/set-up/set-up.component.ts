import {Component} from '@angular/core';
import {SpawnerService} from "../services/spawner.service";

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent {
  codiceInserito: boolean;
  idEsp: number;

  constructor(private spawner: SpawnerService) {
    this.codiceInserito = false;
    //chiedo al back-end un nuovo id esperimento
    this.idEsp = 12346666
  }

  refresh() {
    //chiedo al back-end se il pc è collegato
    if (true) {
      this.codiceInserito = true;
    }
  }

  startSp() {
    this.spawner.RandomPage();
  }

}
