import {Injectable} from '@angular/core';
import {API_URL} from "../common/constants";

@Injectable()
export class QuizServiceClient {

  findAllQuizzes = () =>
    fetch(`${API_URL}/api/quizzes`)
      .then(response => response.json())

  findQuizById = (qid) =>
    fetch(`${API_URL}/api/quizzes/${qid}`)
      .then(response => response.json())

  submitQuiz  = (quizId, questions) =>
    fetch(`${API_URL}/api/quizzes/${quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

  findQuestionsForQuiz = (qid) =>
    fetch(`${API_URL}/api/quizzes/${qid}/questions`)
      .then(response => response.json())

  findAttemptsForQuiz = (qid) =>
    fetch(`${API_URL}/api/quizzes/${qid}/attempts`)
      .then(response => response.json())
}
