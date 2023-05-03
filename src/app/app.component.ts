import {Component, OnInit} from '@angular/core';
import {SpawnerService} from "./services/spawner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private spawner: SpawnerService) {
  }


  ngOnInit(): void {
    this.spawner.nextStep();
  }


}
