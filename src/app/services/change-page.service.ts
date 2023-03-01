import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {
  tasks: string[] = [
    'simple-math',
    'simple-text'
  ];

  constructor() {
  }

  getRandomPage(): string {
    let rand = Math.floor(Math.random() * this.tasks.length);
    return this.tasks[rand];
  }
}
