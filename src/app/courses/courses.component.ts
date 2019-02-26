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
  imageLink: string;
  showCat: boolean;

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
    this.courseService.removeItem(item);
    this.coursesList = this.courseService.getCourses();
    this.defaultCourseList = [...this.coursesList];
  }

  onEdit(id) {
    this.courseService.updateItem(id, 'title', 'Blossom is awesome');
    this.coursesList = this.courseService.getCourses();
    this.defaultCourseList = [...this.coursesList];
  }

  onLoadMore() {
    console.log('Load more');
  }

  onSearch(value: string) {
    this.coursesList = this.defaultCourseList.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }

  onAddCourse() {
    this.courseService.createCourse(this.coursesList[0]);
  }

  onShowImage(link: string) {
    if (link === this.imageLink) {
      this.showCat = false;
      this.imageLink = '';
    } else {
      this.imageLink = link;
      this.showCat = true;
    }
  }
}
