import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCoursePlate]'
})
export class CoursePlateDirective implements OnChanges {
  @Input('appCoursePlate') courseDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges() {
    const createdDate = new Date(this.courseDate.toDateString());
    const currentDate = new Date();
    const freshDate = new Date();
    freshDate.setDate(currentDate.getDate() - 14);

    if (createdDate < currentDate && createdDate >= freshDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
    } else if (createdDate > currentDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid blue');
    }
  }
}
