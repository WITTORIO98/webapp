import {Component, OnDestroy, OnInit} from '@angular/core';
import {GET, Http2Service} from "../../services/http2.service";
import {SpawnerService} from "../../services/spawner.service";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit, OnDestroy {
  questions: any;// : { text: string, answers: { text: string, value: string }[] }[]
  currentAnswers: any;
  currentQuestion: string = "";
  source: string = "";
  url: boolean = false;
  end: boolean = false;


  constructor(private http: Http2Service, private spawner: SpawnerService) {
    http.http.get(http.getUrl(GET.triviaQuestions), http.options).subscribe(data => {
      this.questions = data;
      this.nextQuestion();
    });
  }

  nextQuestion(): void {
    if (this.questions.length > 0) {
      let quest = this.questions.shift();
      this.currentQuestion = quest.text;
      this.currentAnswers = quest.answers;
      //console.log(quest.answers);// todo right and wrong answers indicator
    } else {
      this.currentQuestion = "Fine";
      this.end = true;
    }

    if (this.currentQuestion.startsWith("http") || this.currentQuestion.startsWith("www") || this.currentQuestion.startsWith("assets")) {
      this.source = this.currentQuestion.split(" ", 1)[0];
      this.currentQuestion = this.currentQuestion.substring(this.source.length + 1);

      this.url = true;
    } else {
      this.url = false;
    }

  }

  nextStep(): void {
    this.spawner.nextStep();
  }

  ngOnInit(): void {
    this.http.spawnTask("TriviaComponent");
  }

  ngOnDestroy(): void {
    this.http.despawnTask("TriviaComponent");
  }

}
