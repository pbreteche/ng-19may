import {Component} from '@angular/core';
import {Task, TaskStatus} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Array<Task> = [{
    name: 'Apprendre Angular',
    status: TaskStatus.Doing,
    deadLine: new Date('2019-05-02')
  }, {
    name: 'Apprendre React',
    status: TaskStatus.Doing,
    deadLine: new Date('2019-04-19')
  }, {
    name: 'Apprendre Vue',
    status: TaskStatus.Doing,
    deadLine: new Date('2019-06-14')
  }, {
    name: 'Apprendre le Cobol',
    status: TaskStatus.Doing,
    deadLine: new Date('1965-09-12')
  }];
  currentTask = this.tasks[0];

  setCurrentTask(task: Task) {
    this.currentTask = task;
  }

  addTaskToList(task: Task) {
    this.tasks.unshift(task);
    this.currentTask = task;
  }
}
