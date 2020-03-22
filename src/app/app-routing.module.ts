import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'table/courses', component: CourseListComponent},
  {path: 'table/:courseId', component: CourseViewerComponent},
  {path: 'table/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'table/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
