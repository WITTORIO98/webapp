import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";

@Component({
  selector: 'app-illuminazione-edge',
  templateUrl: './illuminazione-edge.component.html',
  styleUrls: ['./illuminazione-edge.component.scss']
})
export class IlluminazioneEdgeComponent implements OnInit, OnDestroy {

  constructor(private http: Http2Service) {
  }

  ngOnInit(): void {
    this.http.spawnPrivacy(this.constructor.name);
  }

  ngOnDestroy(): void {
    this.http.despawnPrivacy(this.constructor.name);
  }

}
