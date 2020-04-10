import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = { _id : '',
    title : '',
    question: '',
    correct: '',
    choices: ''
  }
  @Input()
  answer = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  grading = false

  grade = () => {this.grading = true}

  unGrade = () => {this.grading = false}

  ngOnInit(): void {
  }

}
