import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpawnerService {
  private tasks: string[] = [
    'simple-math',
    'simple-text'
  ];

  private spawnedTasks: string[] = [];

  constructor() {
  }

  getRandomPage(): [string] {
    if (this.spawnedTasks.length == 0) {
      this.spawnedTasks.push('setUp');
      return ['setUp'];
    }

    let notSpawnedTasks: string[] = [];
    this.tasks.forEach(task => {
      let find: boolean = false;
      this.spawnedTasks.forEach(spawned => {
        if (task == spawned) {
          find = true;
        }
      });
      if (!find) {
        notSpawnedTasks.push(task);
      }
    });

    let rand = Math.floor(Math.random() * notSpawnedTasks.length);
    this.spawnedTasks.push(notSpawnedTasks[rand]);
    return [notSpawnedTasks[rand]];
  }
}
