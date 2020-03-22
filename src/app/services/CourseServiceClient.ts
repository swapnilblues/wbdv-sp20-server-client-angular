import {Injectable} from "@angular/core";

@Injectable()
export class CourseServiceClient {

  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/bhaumik/courses/${courseId}`)
      .then(response => response.json())

  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/bhaumik/courses')
      .then(response => response.json())
}
