import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionServiceClient} from "../services/question.service.client";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(
    private service: QuestionServiceClient,
    private route: ActivatedRoute) {
  }

  questions = []
  quizId = ''
  courseId = ''

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId
      this.courseId = params.courseId
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions)
    })
  }

}
