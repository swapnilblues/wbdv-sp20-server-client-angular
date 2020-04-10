import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {


  constructor(
    private service: QuizServiceClient,
    private route: ActivatedRoute) {
  }

  quizzes = [{
    title: '',
    attempts: []
  }]
  courseId = ''

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;

      this.service.findAllQuizzes()
        .then(quizzes => {
          this.quizzes = quizzes
          return quizzes.map(quiz => {
            console.log(quiz._id)
            return fetch(`http://localhost:3000/api/quizzes/${quiz._id}/attempts`)
              .then(response => response.json())
          })
        })
        .then(attemptPromises => {
          return Promise.all(attemptPromises)
        })
        .then(attempts => {
            console.log(attempts)
            for (let i = 0; i < this.quizzes.length; i++) {
              // @ts-ignore
              this.quizzes[i].attempts = attempts[i]
            }
          }
        )
    });


  }

}
