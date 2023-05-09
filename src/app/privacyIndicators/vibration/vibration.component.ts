import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http2Service} from "../../services/http2.service";

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.scss']
})
export class VibrationComponent implements OnInit, OnDestroy {
  timestamp: number = Date.now();

  ngOnInit(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]); // specifica la durata della vibrazione in millisecondi
      console.log('Vibrazione attivata');
    } else {
      console.log('API Web Vibration non supportata dal browser');
    }
  }

  public static vibrate() {
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]); // specifica la durata della vibrazione in millisecondi
    } else {
      console.log('API Web Vibration non supportata dal browser');
    }
  }

  ngOnDestroy(): void {
    Http2Service.experiment.indicators.push({
      name: "VibrationComponent",
      start: this.timestamp,
      end: Date.now(),
    });
  }

}
