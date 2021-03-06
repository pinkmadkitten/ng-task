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
      topRated: true,
      url: 'http://www.best-cat-art.com/images/scottish-fold-300x468.jpg'
    },
    {
      id: 1,
      description: 'meow? meow meow! meow? meow meow! meow? meow meow!',
      creationDate: new Date('01/25/2019'),
      duration: 38,
      title: 'Cat Meow',
      color: 'pink',
      topRated: true,
      url: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/scottish-fold-detail.jpg?bust=1535567146&width=355'
    },
    {
      id: 2,
      description: 'meow meow meow! meow meow meow! meow meow meow! meow meow meow!',
      creationDate: new Date('03/21/2019'),
      duration: 125,
      title: 'Cat World!',
      color: 'grey',
      topRated: false,
      url: 'http://images6.fanpop.com/image/photos/40400000/Sweet-Cat-cats-40483584-500-333.jpg'
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
