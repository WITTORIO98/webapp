import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

const empty: [string] = ['empty'];
const tasks: string[] = [
  'engineer1',
  'stackGame',
  'engineer2',
  'stackGame',
  'engineer3',
  'stackGame',
];
const indicators: string[] = [
  'classic',
  'topEdge',
  'classic-disco'
];

const steps: string[] = [
  'setUp',
  'calibration',
  'TASKS-INDICATORS',
  'privacySurvey',
  'end',
  'END'
];

@Injectable({
  providedIn: 'root'
})
export class SpawnerService {
  private readonly delay = {default: 2500, rMin: 0, rMax: 30000};
  private readonly duration = {default: 8000, rMin: 500, rMax: 30000};

  private spawnedTasks: string[] = [];
  private spawnedIndicators: string[] = [];
  private latest = {task: empty, indicator: empty};
  private nexStep: string = steps[0];

  private indicatorIndex: number = 0;

  constructor(private router: Router) {
  }

  /**
   * spawna un task a caso.
   * ogni task non si ripeterà mai.
   * se i task sono finiti chiama nextStep()
   */
  public randomTask(): void {
    const random = false;
    if (random) {
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
        this.nexStep = steps[steps.indexOf(this.nexStep) + 1];
        this.nextStep();
      } else {
        let rand = Math.floor(Math.random() * notSpawnedTasks.length);
        this.spawnedTasks.push(notSpawnedTasks[rand]);
        this.routerNav([notSpawnedTasks[rand]]);
      }
    } else {

      if (this.spawnedTasks.length == (tasks.length - 1)) {
        this.nexStep = steps[steps.indexOf(this.nexStep) + 1];
      }
      this.routerNav([tasks[this.spawnedTasks.length]]);
      this.spawnedTasks.push(tasks[this.spawnedTasks.length]);

    }


  }

  /**
   * @param delay     ms    -1=random
   * @param duration  ms    -1=random
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
    /*
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
      console.debug("TUtti gli indicator sono stati schedulati");
      this.scheduleIndicator(delay, duration, empty);
    } else {
      let rand = Math.floor(Math.random() * notSpawnedIndicators.length);
      this.spawnedIndicators.push(notSpawnedIndicators[rand]);
      this.scheduleIndicator(delay, duration, [notSpawnedIndicators[rand]]);
    }
    */

    this.scheduleIndicator(delay, duration, [indicators[this.indicatorIndex]]);
    this.indicatorIndex++;
    if (this.indicatorIndex >= indicators.length) {
      this.indicatorIndex = 0;
    }
  }

  public scheduleIndicator(delay: number, duration: number, indicator: [string]) {
    setTimeout(() => {
      this.routerNav(undefined, indicator);
    }, delay);
    setTimeout(() => {
      this.removeIndicator();
    }, delay + duration);
  }

  private removeIndicator() {
    this.routerNav(undefined, empty);
  }

  public routerNav(task?: [string], indicator?: [string]): void {
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

  public nextStep(step?: string): void {

    if (step == undefined) {

      if (this.nexStep == 'TASKS-INDICATORS') {
        this.randomTask();
        this.randomIndicator();
      } else if (this.nexStep == 'END') {
        this.routerNav(empty, empty);
      } else {
        this.routerNav([this.nexStep], empty);
        this.nexStep = steps[steps.indexOf(this.nexStep) + 1];
      }

    } else {
      this.routerNav([step], empty);
    }

  }

}
