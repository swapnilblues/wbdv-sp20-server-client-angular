import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
    private route: ActivatedRoute) { }

  lessons = []
  moduleId = ''
  courseId = ''
  lessonId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.lessonId = params.lessonId;

      this.service.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons)
    });
  }

}
