import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  lessons = []
  moduleId = ''
  courseId = ''
  lessonId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.lessonId = params.lessonId;
      fetch(`http://wbdv-generic-server.herokuapp.com/api/bhaumik/modules/${this.moduleId}/lessons`)
        .then(response => response.json())
        .then(lessons => this.lessons = lessons)
    });
  }

}
