import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SpawnerService {
  private tasks: string[] = [
    'simple-math',
    'simple-text'
  ];
  private indicators: string[] = [
    'classic',
    'illuminazone-edge'
  ];

  private spawnedTasks: string[] = [];
  private spawnedindicators: string[] = [];

  constructor(private router: Router) {
  }

  /**
   * la prima volta spawna il setUp page.
   * ogni pagina non si ripeterà mai.
   * se le pagine sono finite riporta alla setUp page
   */
  public RandomPage(): void {
    if (this.spawnedTasks.length == 0) {
      this.spawnedTasks.push('setUp');
      this.router.navigate(['setUp']);
    } else {

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
  public getRandomPrivacy(delay: number, duration: number): [string] {

    return ['app-empty'];
  }

}
