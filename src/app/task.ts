export enum TaskStatus {
  ToDo = 'Tomorrow, I begin',
  Doing = 'doing',
  Done = 'already done, boss'
}

export class Task {
  name: string;
  status: TaskStatus;
  deadLine: Date;
}
