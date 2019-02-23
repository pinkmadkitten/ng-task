import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {CourseInterface} from './course/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  coursesList: CourseInterface[];
  defaultCourseList: CourseInterface[];

  constructor() {
  }

  ngOnInit() {
    this.coursesList = [
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
    this.defaultCourseList = [...this.coursesList];
    console.log('onInit');
  }

  ngOnChanges() {
    console.log('on changes');
  }

  ngDoCheck() {
    console.log('on check');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

  onDelete(item: CourseInterface) {
    console.log(`deleted`, item);
  }


  onLoadMore() {
    console.log('Load more');
  }

  onSearch(value: string) {
    this.coursesList = this.defaultCourseList.filter((item) => {
     return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
