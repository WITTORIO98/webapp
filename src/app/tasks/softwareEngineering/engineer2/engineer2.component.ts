import {Component, OnDestroy, OnInit} from '@angular/core';
import {GET, Http2Service, POST} from "../../../services/http2.service";
import {SpawnerService} from "../../../services/spawner.service";

@Component({
  selector: 'app-engineer2',
  templateUrl: './engineer2.component.html',
  styleUrls: ['./engineer2.component.scss']
})
export class Engineer2Component implements OnInit, OnDestroy {
  timestamp: number = Date.now();
  questions: any;// : { text: string, answers: { text: string, value: string }[] }[]
  currentAnswers: any;
  currentQuestion: string = "";

  selectedAnswers: { question: string, answer: string }[] = [];

  constructor(private http: Http2Service, private spawner: SpawnerService) {
    http.http.get(http.getUrl(GET.engineer2), http.options).subscribe(data => {
      this.questions = data;
      this.nextQuestion();
    });
  }

  nextQuestion(anwer?: any): void {
    if (anwer != undefined) {
      this.selectedAnswers.push({question: this.currentQuestion, answer: anwer});
    }

    if (this.questions.length > 0) {
      let quest = this.questions.shift();
      this.currentQuestion = quest.text;
      this.currentAnswers = quest.answers;
    } else {
      this.spawner.nextStep('calibration');
    }
  }

  ngOnInit(): void {
    this.http.spawnTask(this.constructor.name);
  }

  ngOnDestroy(): void {
    this.http.post(POST.engineerAnswers, this.constructor.name, this.selectedAnswers);
    this.http.despawnTask(this.constructor.name);
    Http2Service.experiment.tasks.push({
      name: this.constructor.name,
      start: this.timestamp,
      end: Date.now(),
      extra: {
        quiz: this.selectedAnswers,
      }
    });
  }

}
