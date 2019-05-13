import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Task} from './task';
import {TaskProviderService} from './task-provider.service';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private data: number[];
  statSubject = new Subject<number[]>();

  constructor(provider: TaskProviderService) {
    provider.getTasks().subscribe((tasks: Task[]) => {
      this.data = tasks.reduce(statReducer, [0, 0, 0]);
      this.statSubject.next(this.data);
    });
  }

  getStat(): Observable<number[]> {
    return this.statSubject.asObservable();
  }
}

const statReducer = (acc, cur) => {
  acc[cur.status]++;
  return acc;
};
