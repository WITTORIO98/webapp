import {Component, OnInit} from '@angular/core';
import {SpawnerService} from "../../services/spawner.service";

@Component({
  selector: 'app-accuracy-test',
  templateUrl: './accuracy-test.component.html',
  styleUrls: ['./accuracy-test.component.scss']
})
export class AccuracyTestComponent implements OnInit {
  public animationTime: number = 10000;  //ms
  public color: string = "red";

  public test: boolean = false;
  public testComplete: boolean = false;
  private startTime: number = 0;
  public accuracyPoints: number = 69;

  constructor(public spawner: SpawnerService) {
  }

  ngOnInit(): void {
    let vars = document.querySelector('.accuracyTestVars');
    // @ts-ignore
    vars.style.setProperty('--time', this.animationTime + "ms");
  }

  startTest() {
    this.startTime = new Date().getTime();
    //inizio a collezzionare i dati occhio todo
    this.test = true;

    setTimeout(() => {
      //prendo i dati dellocchio e faccio i calcoli todo
      this.test = !this.test;
      this.testComplete = true;
    }, this.animationTime);


  }
}
