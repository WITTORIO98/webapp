import {Component, OnInit} from '@angular/core';
import {GET, Http2Service, POST} from "../../services/http2.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  public selectedAnswers: { [key: string]: string } = {};

  public questions: any;// : { text: string, answers: { text: string, value: string }[] }[]

  constructor(private http: Http2Service) {
    http.http.get(http.getUrl(GET.surveyQuestions), http.options).subscribe(data => {
      this.questions = data;
    });
  }

  updateAnswer(value: string, questionText: string) {
    this.selectedAnswers[questionText] = value;
  }

  submit() {
    console.log(this.selectedAnswers);
    this.http.post(POST.surveyAnswers, this.selectedAnswers);
  }

}
