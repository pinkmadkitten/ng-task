import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {CourseInterface} from './course/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  coursesList: CourseInterface[];

  constructor() {
  }

  ngOnInit() {
    this.coursesList = [
      {
        id: 0,
        description: 'meow meow meow meow meow meow',
        creationDate: new Date(),
        duration: 26,
        title: 'Cat World'
      },
      {
        id: 1,
        description: 'meow? meow meow! meow? meow meow! meow? meow meow!',
        creationDate: new Date(),
        duration: 38,
        title: 'Cat World?'
      },
      {
        id: 2,
        description: 'meow meow meow! meow meow meow! meow meow meow! meow meow meow!',
        creationDate: new Date(),
        duration: 125,
        title: 'Cat World!'
      }
    ];
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
}
