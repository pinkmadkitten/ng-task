import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseInterface} from './course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseItem: CourseInterface;
  @Output() deleteCourse: EventEmitter<CourseInterface> = new EventEmitter<CourseInterface>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
@Output() showImage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.deleteCourse.emit(this.courseItem);
  }

  onEdit() {
    this.edit.emit(this.courseItem.id);
  }

  onShowImage() {
    this.showImage.emit(this.courseItem.url);
  }
}
