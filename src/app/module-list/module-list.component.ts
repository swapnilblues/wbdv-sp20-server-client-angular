import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// import {ModuleServiceClient} from "../services/ModuleServiceClient";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [
    // {_id: '123', title: 'Eden Hazard'},
    // {_id: '234', title: 'Cristiano Ronaldo'},
    // {_id: '345', title: 'Neymar JR'},
    // {_id: '456', title: 'Lionel Messi'}
  ]
  courseId = ''
  moduleId = ''

  constructor(
    // private service: ModuleServiceClient,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      fetch(`http://wbdv-generic-server.herokuapp.com/api/bhaumik/courses/${this.courseId}/modules`)
        .then(response => response.json())
        .then(modules => this.modules = modules)
      // this.service.findModulesForCourse(this.courseId)
      //   .then(modules => this.modules = modules)

    })
  }

}
