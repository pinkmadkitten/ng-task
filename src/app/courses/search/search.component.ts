import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() addCourse: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onSearchChange(value: string) {
    this.searchChange.emit(value);
  }

  onAddCourse() {
    this.addCourse.emit();
  }
}
