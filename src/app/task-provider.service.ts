import {Task} from './task';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskProviderService {

  tasks = new Array<Task>();
  tasksSubject = new ReplaySubject<Task[]>(1);

  constructor(private http: HttpClient) {
    this.http.get<Task[]>('/assets/tasks.json')
      .subscribe(tasks => {
        this.tasks = tasks;
        this.tasksSubject.next(this.tasks);
      });
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  add(newTask: Task) {
    // ajoute la tâche en début de liste
    this.tasks.unshift(newTask);
    // notifie tous les abonnés avec la nouvelle version de la liste
    this.tasksSubject.next(this.tasks);
  }
}
