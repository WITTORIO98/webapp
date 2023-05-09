import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";

@Component({
  selector: 'app-simple-math',
  templateUrl: './simple-math.component.html',
  styleUrls: ['./simple-math.component.scss']
})
export class SimpleMathComponent implements OnInit, OnDestroy {

  constructor(private http: Http2Service) {
  }

  ngOnInit(): void {
    this.http.spawnTask("SimpleMathComponent");
  }

  ngOnDestroy(): void {
    this.http.despawnTask("SimpleMathComponent");
  }

}
