import {Component} from '@angular/core';
import {Task, TaskStatus} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task: Task = {
    name: 'Apprendre Angular',
    status: TaskStatus.Doing,
    deadLine: new Date('2019-05-02')
  };
}
