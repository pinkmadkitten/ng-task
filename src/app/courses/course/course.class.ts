import {CourseInterface} from './course.interface';

export class CourseClass implements CourseInterface {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}
