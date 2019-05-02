import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  @Output() taskCreated = new EventEmitter<Task>();
  newTask = new Task();

  addTask() {
    this.taskCreated.emit(this.newTask);
    this.newTask = new Task();
  }
}
