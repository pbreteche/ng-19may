export enum TaskStatus {
  ToDo,
  Doing,
  Done
}

export class Task {
  id: number;
  name: string;
  status: TaskStatus;
  deadLine: Date;
}
