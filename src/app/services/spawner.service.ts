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

  /**
   * ritorna una pagina [string] compatibie con Router.navigate()
   * la prima volta ritorna il setUp page.
   * ogni pagina non si ripeterà mai.
   * se le pagine sono finite riporta alla setUp page
   */
  public getRandomPage(): [string] {
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

    if (notSpawnedTasks.length == 0) {
      return ['setUp'];
    }

    let rand = Math.floor(Math.random() * notSpawnedTasks.length);
    this.spawnedTasks.push(notSpawnedTasks[rand]);
    return [notSpawnedTasks[rand]];
  }

  /**
   *
   * @param delay     -1=default=random   dopo quanto tempo appare
   * @param duration  -1=default=random   quanto tempo dura
   */
  public getRandomPrivacy(delay: number, duration: number): [string] {

    return ['classic'];
  }

}
