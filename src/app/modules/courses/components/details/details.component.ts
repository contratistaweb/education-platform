import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../../../core/services/courses.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  courseSelected: any;
  showCardActions: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.courseSelected = this.coursesService.getCoursesJSON().filter(course => course.id === id)[0];
      this.updateCourseSelected(id);
      console.log('this.courseSelected', this.courseSelected);
    })
  }

  updateCourseSelected = (id: string) => {
    this.courseSelected.seen = true;
    console.log(this.coursesService.updateCourse(id, this.courseSelected));

  }
}
