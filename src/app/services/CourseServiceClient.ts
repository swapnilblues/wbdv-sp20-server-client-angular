import {Injectable} from "@angular/core";

@Injectable()
export class CourseServiceClient {
  findAllCourses =() =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/bhaumik/courses')
      .then(response => response.json())
}
