import {Component, OnInit} from '@angular/core';
import {Course} from "../../../../core/interfaces/course";
import {CoursesService} from "../../../../core/services/courses.service";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  categories: string[] = [];
  showFilterCategories = false;
  showCardActions = true;
  id = ''
  topics: string[] = [];
  images: string[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.courseLoad();
    this.getCategories();
  }

  getCategories = () => {
    this.courses.forEach(course => {
      if (this.categories.filter(category => category === course.category).length === 0) {
        this.categories.push(course.category);
      }
    })
  }

  courseLoad = () => {
    this.courses = this.coursesService.getCoursesJSON();
  }

  categorySelected(event: any) {
    this.courseLoad()
    this.courses = this.courses.filter(course => course.category === event);
    this.showFilterCategories = true;
  }

  showButton() {
    this.showFilterCategories = !this.showFilterCategories;
    this.courses = [];
    this.courseLoad();
  }

}
