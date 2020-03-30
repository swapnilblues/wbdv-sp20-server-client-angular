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
}
