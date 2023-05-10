import {Component} from '@angular/core';
import {GET, Http2Service} from "../../services/http2.service";
import {SpawnerService} from "../../services/spawner.service";

@Component({
  selector: 'app-privacy-survey',
  templateUrl: './privacy-survey.component.html',
  styleUrls: ['./privacy-survey.component.scss']
})
export class PrivacySurveyComponent {
  public one: boolean = true;
  public two: boolean = false;
  public three: boolean = false;
  public answers: string[] = ["si", "no", "si, piu di una volta"];

  public questions: { question: string, answer: string }[] = [];

  constructor(private http: Http2Service, private spawner: SpawnerService) {
  }

  updateAnswer(risposta: string, privacy: string) {
    this.questions.push({question: privacy, answer: risposta});

    if (this.three) {
      this.fine();
    }
    if (this.two) {
      this.two = false;
      this.three = true;
    }
    if (this.one) {
      this.one = false;
      this.two = true
    }
  }

  private fine() {
    Http2Service.experiment.survey=this.questions;
    this.spawner.nextStep();
  }
}
