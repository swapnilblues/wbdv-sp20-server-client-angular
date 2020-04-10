import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() {
  }

  @Input()
  question = {
    _id: '',
    title: '',
    question: '',
    correct: ''
  }
  @Input()
  answer = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  grading = false

  grade = () => {
    this.grading = true
  }

  unGrade = () => {
    this.grading = false
  }

  ngOnInit(): void {
  }

}
