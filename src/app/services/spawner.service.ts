import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

const empty: [string] = ['app-empty'];
const tasks: string[] = [
  'simple-math',
  'simple-text'
];
const indicators: string[] = [
  'classic',
  'illuminazione-edge'
];

@Injectable({
  providedIn: 'root'
})
export class SpawnerService {
  private readonly defaultDelay: number = 1;
  private readonly defaultDuration: number = 1;

  private spawnedTasks: string[] = [];
  private spawnedIndicators: string[] = [];

  constructor(private router: Router) {
  }

  /**
   * la prima volta spawna il setUp page.
   * ogni pagina non si ripeterà mai.
   * se le pagine sono finite riporta alla setUp page
   */
  public randomPage(): void {
    if (this.spawnedTasks.length == 0) {
      this.spawnedTasks.push('setUp');
      this.router.navigate(['setUp']);
    } else {

      let notSpawnedTasks: string[] = [];
      tasks.forEach(task => {
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
        this.router.navigate(['setUp']);
      } else {
        let rand = Math.floor(Math.random() * notSpawnedTasks.length);
        this.spawnedTasks.push(notSpawnedTasks[rand]);
        this.router.navigate([notSpawnedTasks[rand]]);
      }

    }

  }

  /**
   *
   * @param delay     -1=default=random   dopo quanto tempo appare
   * @param duration  -1=default=random   quanto tempo dura
   */
  public randomIndicator(delay?: number, duration?: number): void {
    if (delay == undefined) {
      delay = this.defaultDelay;
    }
    if (duration == undefined) {
      duration = this.defaultDuration;
    }



  }

  public removeIndicator() {
    this.router.navigate(empty);
  }

}
