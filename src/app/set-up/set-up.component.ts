import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent {
  @Output('start') start: EventEmitter<any> = new EventEmitter();
  codiceInserito: boolean;
  idEsp: number;

  constructor() {
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
    this.start.emit();
  }
  
}
