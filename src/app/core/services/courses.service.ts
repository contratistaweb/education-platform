import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor() {
  }

  getCourses = () => {
    let nCards = 1;
    let courses = [];
    do {
      courses.push({
        id: `${nCards}`,
        name: `course ${nCards}`,
        description: "this is a description for the course.",
        temary: [`temary ${nCards}`, `temary ${nCards + 1}`, `temary ${nCards + 2}`, `temary ${nCards + 3}`],
        category: `${nCards % 3 ? 'html' : 'javascript'}`,
        tags: [`tag_${nCards}`, `tag_${nCards + 1}`, `tag_${nCards + 2}`],
        price: Math.random() * 10000,
        seen: false,
      })
      nCards++
    }
    while (nCards < 10)
    return courses;
  }
}
