import {Component, OnInit} from '@angular/core';
import {GET, Http2Service, POST} from "../../services/http2.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  public selectedAnswers: { [key: string]: string } = {};

  public questions = [
    {
      text: 'Qual è il tuo animale preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo dio preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    {
      text: 'Qual è il tuo bug preferito?',
      answers: [
        {text: 'Cane', value: 'dog'},
        {text: 'Gatto', value: 'cat'},
        {text: 'Pappagallo', value: 'parrot'}
      ]
    },
    // aggiungi altre domande
  ];

  constructor(private http: Http2Service) {
  }

  ngOnInit(): void {
    //this.selectedAnswers = this.http.get(GET.surveyQuestions);

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
