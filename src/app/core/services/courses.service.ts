import {Injectable} from '@angular/core';
import {Course} from "../interfaces/course";
import {environment} from "../../../environments/environment";
import courses from 'src/assets/json/courses.json';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = courses;
  clientId = environment.clientId

  constructor() {  }

  getCoursesJSON = (): Course[] => {
    return courses;
  }

  getCourseForId = (id: string): Course => {
    return this.courses.filter(course => course.id === id)[0];
  }

  updateCourse = (id: string, course: Course): Course[] => {
    this.courses = this.courses.filter(course => course.id !== id);
    this.courses.push(course);
    return this.courses;
  }
}
