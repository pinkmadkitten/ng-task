import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {CourseInterface} from './course/course.interface';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  coursesList: CourseInterface[];
  defaultCourseList: CourseInterface[];

  constructor(private courseService: CoursesService) {
  }

  ngOnInit() {
    this.coursesList = this.courseService.getCourses();
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
