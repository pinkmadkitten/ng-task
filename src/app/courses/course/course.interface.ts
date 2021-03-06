export interface CourseInterface {
  id?: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  color?: string;
  topRated: boolean;
  url: string;
}
