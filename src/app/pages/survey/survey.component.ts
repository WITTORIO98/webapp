import {Component, OnInit} from '@angular/core';
import {GET, Http2Service, POST} from "../../services/http2.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  public selectedAnswers: { [key: string]: string } = {};


  constructor(private http: Http2Service) {
  }

  }

  submit() {
    // elabora le risposte selezionate dall'utente
    console.log(this.selectedAnswers);
    this.http.post(POST.surveyAnswers, this.selectedAnswers);
  }

  updateAnswer(value: string, questionText: string) {
    this.selectedAnswers[questionText] = value;
  }


}
