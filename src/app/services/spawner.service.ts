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
  private readonly delay = {default: 2, rMin: 1, rMax: 3};
  private readonly duration = {default: 2, rMin: 1, rMax: 3};

  private spawnedTasks: string[] = [];
  private spawnedIndicators: string[] = [];
  private latest = {task: empty, indicator: empty};

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
      this.routerNav(['setUp']);
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
        this.routerNav(['setUp']);
      } else {
        let rand = Math.floor(Math.random() * notSpawnedTasks.length);
        this.spawnedTasks.push(notSpawnedTasks[rand]);
        this.routerNav([notSpawnedTasks[rand]]);
      }

    }

  }

  /**
   * @param delay     '-1'=random
   * @param duration  '-1'=random
   */
  public randomIndicator(delay?: number, duration?: number): void {
    if (delay == undefined) {
      delay = this.delay.default;
    }
    if (duration == undefined) {
      duration = this.duration.default;
    }
    if (delay == -1) {
      delay = Math.floor(Math.random() *
        (this.delay.rMax - this.delay.rMin + 1)) + this.delay.rMin;
    }
    if (duration == -1) {
      duration = Math.floor(Math.random() *
        (this.duration.rMax - this.duration.rMin + 1)) + this.duration.rMin;
    }

    let notSpawnedIndicators: string[] = [];
    indicators.forEach(indicator => {
      let find: boolean = false;
      this.spawnedIndicators.forEach(spawned => {
        if (indicator == spawned) {
          find = true;
        }
      });
      if (!find) {
        notSpawnedIndicators.push(indicator);
      }
    });

    if (notSpawnedIndicators.length == 0) {
      console.log("TUtti gli indicator sono stati schedulati");
      this.scheduleIndicator(delay, duration, empty);
    } else {
      let rand = Math.floor(Math.random() * notSpawnedIndicators.length);
      this.spawnedIndicators.push(notSpawnedIndicators[rand]);
      this.scheduleIndicator(delay, duration, [notSpawnedIndicators[rand]]);
    }


  }

  public scheduleIndicator(delay: number, duration: number, indicator: [string]) {
    //todo implementare delay e duration
    console.log("spawn indicators:  ", indicator);
    this.routerNav(undefined, ['classic']);
  }

  public removeIndicator() {
    this.routerNav(undefined, empty);
  }

  private routerNav(task?: [string], indicator?: [string]): void {
    if (task == undefined) {
      task = this.latest.task;
    }
    if (indicator == undefined) {
      indicator = this.latest.indicator;
    }

    this.latest.task = task;
    this.latest.indicator = indicator;

    this.router.navigate([
      {
        outlets: {
          outlet1: task,
          outlet2: indicator
        }
      }
    ]);
  }

}
