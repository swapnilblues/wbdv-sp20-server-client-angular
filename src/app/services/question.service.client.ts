import {Injectable} from "@angular/core";
import {API_URL} from "../common/constants";

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${API_URL}/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
