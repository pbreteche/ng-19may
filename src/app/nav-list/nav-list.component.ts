import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskProviderService} from '../task-provider.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  taskList: Array<Task>;

  constructor(
    private provider: TaskProviderService
  ) { }

  ngOnInit() {
    this.provider.getTasks().subscribe(tasks => this.taskList = tasks);
  }
}
