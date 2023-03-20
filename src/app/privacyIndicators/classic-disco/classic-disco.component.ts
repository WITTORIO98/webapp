import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-classic-disco',
  templateUrl: './classic-disco.component.html',
  styleUrls: ['./classic-disco.component.scss']
})
export class ClassicDiscoComponent implements OnInit, OnDestroy {
  private variables = document.querySelector('.classicDiscoVariables');

  ngOnInit(): void {
    /*random*/
    let innerDiameter: number = 3; //vw
    let top: number = 6;  //vw
    let right: number = 10; //vw
    let color: string = 'red';
    let border: number = 3; //vw
  }

  ngOnDestroy(): void {
  }

}
