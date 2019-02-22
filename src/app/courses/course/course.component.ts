import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseInterface} from './course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseItem: CourseInterface;
  @Output() deleteCourse: EventEmitter<CourseInterface> = new EventEmitter<CourseInterface>();

  constructor() {
  }

  ngOnInit() {
  }

  onDelete() {
    this.deleteCourse.emit(this.courseItem);
  }
}
