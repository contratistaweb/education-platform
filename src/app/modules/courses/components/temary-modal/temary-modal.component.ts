import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from "../../../../core/services/courses.service";

@Component({
  selector: 'temary-modal',
  templateUrl: './temary-modal.component.html',
  styleUrls: ['./temary-modal.component.scss']
})
export class TemaryModalComponent implements OnInit {

  @Input() id!: string;
  topics: string[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    const course  = this.coursesService.getCourseForId(this.id);
    console.log(this.coursesService.getCourseForId(this.id))
    this.topics = course.topics;
    console.log(this.topics)
  }
}
