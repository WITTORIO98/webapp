import {Component, ElementRef, OnInit} from '@angular/core';
import {SpawnerService} from "./services/spawner.service";
import {EyeTrackerService, GuiType} from "./services/eye-tracker.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private elementRef: ElementRef,
              private spawner: SpawnerService,
              private eye: EyeTrackerService) {

  }


  ngOnInit(): void {
    this.eye.start(GuiType.DOT);

    //fullscreen todo

    this.spawner.nextStep();
  }


}
