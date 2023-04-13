import {Component} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  public briefing: boolean = true;
  public video: boolean = false;
  public quests: boolean = false;
  public questions: { text: string, answers: { text: string, value: string }[] }[] = [
    {
      text: 'quanti taxi sono usciti dall inquadratura sotto?',
      answers: [
        {text: '1', value: 'false'},
        {text: '2', value: 'false'},
        {text: '3', value: 'false'},
        {text: '4', value: 'true'},
      ]
    },
    {
      text: 'What is the name of the video??',
      answers: [
        {text: 'Video 1', value: 'video1'},
        {text: 'Video 2', value: 'video2'},
      ]
    }
  ];
  public selectedAnswers: { [key: string]: string } | undefined = undefined;

  updateAnswer(value: string, questionText: string) {
    if (this.selectedAnswers === undefined) {
      this.selectedAnswers = {};
    }
    this.selectedAnswers[questionText] = value;
  }

  submit() {
    console.log(this.selectedAnswers);
  }


}
