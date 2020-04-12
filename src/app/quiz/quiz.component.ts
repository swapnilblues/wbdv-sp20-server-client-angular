import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(
    private service: QuizServiceClient,
    private route: ActivatedRoute) {
  }

  questions = []
  quizId = ''
  courseId = ''
  score = 'null'

  submitQuiz = () => {
    this.service.submitQuiz(this.quizId, this.questions)
      .then(result => this.score = result.score)
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId
      this.courseId = params.courseId
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions)
    })
  }

}
