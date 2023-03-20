import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.scss']
})
export class VibrationComponent implements OnInit {


  ngOnInit(): void {//todo testing
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]); // specifica la durata della vibrazione in millisecondi
      console.log('Vibrazione attivata');
    } else {
      console.log('API Web Vibration non supportata dal browser');
    }

  }

}
