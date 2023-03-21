import {Component} from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
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

  submit() {
    // elabora le risposte selezionate dall'utente
    console.log(this.selectedAnswers);
  }

  updateAnswer(value: string, questionText: string) {
    this.selectedAnswers[questionText] = value;
  }


}
