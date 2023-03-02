import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit, OnDestroy {

  constructor(private http: Http2Service) {
  }

  ngOnInit(): void {
    this.http.spawnPrivacy(this.constructor.name);
  }

  ngOnDestroy(): void {
    this.http.despawnPrivacy(this.constructor.name);
  }

}
