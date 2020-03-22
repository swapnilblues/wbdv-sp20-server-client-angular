import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from "../services/CourseServiceClient";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) {
  }


  courses = []
  courseId = ''

  deleteCourse = (deletedCourse) =>
    this.courses = this.courses.filter(course => course !== deletedCourse)
  createCourse = (title) =>
    this.courses.push({_id: '321', title: title})

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.findAllCourses()
        .then(courses => this.courses = courses)

    this.courseId = params.courseId;
    })
  }

}
