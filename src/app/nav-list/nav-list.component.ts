import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  @Input() taskList: Array<Task>;
  @Output() taskSelected = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  select(task: Task) {
    console.log('click on nav list', task);
    this.taskSelected.emit(task);
  }
}
