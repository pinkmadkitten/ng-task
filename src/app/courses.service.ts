import {Injectable} from '@angular/core';
import {CourseInterface} from './courses/course/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: CourseInterface[] = [
    {
      id: 0,
      description: 'meow meow meow meow meow meow',
      creationDate: new Date('02/18/2019'),
      duration: 26,
      title: 'Dog World',
      color: 'lightblue',
      topRated: true
    },
    {
      id: 1,
      description: 'meow? meow meow! meow? meow meow! meow? meow meow!',
      creationDate: new Date('01/25/2019'),
      duration: 38,
      title: 'Cat Meow',
      color: 'pink',
      topRated: true
    },
    {
      id: 2,
      description: 'meow meow meow! meow meow meow! meow meow meow! meow meow meow!',
      creationDate: new Date('03/21/2019'),
      duration: 125,
      title: 'Cat World!',
      color: 'grey',
      topRated: false
    }
  ];

  constructor() {
  }

  getCourses(): CourseInterface[] {
    return this.coursesList;
  }

  createCourse(course: CourseInterface) {
    const newCourse = {...course, id: this.coursesList.length};
    this.coursesList.push(newCourse);
  }

  getItem(id: number): CourseInterface {
    return this.coursesList[id];
  }

  updateItem(id: number, field: string, data: any) {
    this.coursesList[id][field] = data;
  }

  removeItem(item: CourseInterface) {
    const index = this.coursesList.indexOf(item);
    this.coursesList.splice(index, 1);
  }
}
