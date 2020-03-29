import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {HomeComponent} from "./home/home.component";
import {QuizzesComponent} from "./quizzes/quizzes.component";
import {QuizComponent} from "./quiz/quiz.component";

const routes: Routes = [
  {path: 'quizzes/:quizId', component: QuizComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: '', component: HomeComponent},
  {path: 'table/courses', component: CourseListComponent},
  {path: 'table/courses/:courseId', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
