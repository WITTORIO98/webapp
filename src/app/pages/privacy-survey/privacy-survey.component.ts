import {Component} from '@angular/core';

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
    return;
  }
}
