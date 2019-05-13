import { Injectable } from '@angular/core';
import {Task} from './task';
import {Observable, Subject} from 'rxjs';
import {TaskProviderService} from './task-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentTaskService {

  taskSubject = new Subject<Task>();

  constructor(private provider: TaskProviderService) {
    this.provider.getTasks().subscribe(tasks => this.taskSubject.next(tasks[0]));
  }

  getCurrentTask(): Observable<Task> {
    // Les composants (observateurs) peuvent souscrire aux observables
    // mais ils ne doivent pas pouvoir déclencher de nouveaux états
    return this.taskSubject.asObservable();
  }

  define(task: Task) {
    // En cas de changement de tâche courante
    // on notifie tous les observateurs avec un nouvel état
    this.taskSubject.next(task);
  }
}
