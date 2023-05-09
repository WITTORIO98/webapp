import {Component, OnInit} from '@angular/core';
import {GET, Http2Service, POST} from "../../services/http2.service";
import {HttpClient} from "@angular/common/http";
import {SpawnerService} from "../../services/spawner.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  public selectedAnswers: { [key: string]: string } | undefined = undefined;

  public questions: any;// : { text: string, answers: { text: string, value: string }[] }[]
  public send: boolean = false;

  constructor(private http: Http2Service, private spawner: SpawnerService) {
    http.http.get(http.getUrl(GET.surveyQuestions), http.options).subscribe(data => {
      this.questions = data;
      this.send = !this.send;
    });
  }

  updateAnswer(value: string, questionText: string) {
    if (this.selectedAnswers === undefined) {
      this.selectedAnswers = {};
    }
    this.selectedAnswers[questionText] = value;
  }

  submit() {
    if (this.selectedAnswers != undefined) {
      let bodys = {
        timestamp: Date.now(),
        questions: this.selectedAnswers
      };
      this.http.post(POST.surveyAnswers, "SurveyComponent", this.selectedAnswers);
      this.spawner.nextStep();
    }

  }

}
