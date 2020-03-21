import { Injectable } from '@angular/core';
import { ITask } from 'src/app/core/models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = [
    {
      id: 1,
      title: 'task #1',
      description: 'description for task #1',
      priority: 'normal',
      createdDate: '2019-05-30T12:42:19.000Z',
      deadlineDate: '',
      completedDate: '',
      completed: false,
    },
    {
      id: 2,
      title: 'task #2',
      description: 'description for task #2',
      priority: 'important',
      createdDate: '2019-07-30T12:42:19.000Z',
      deadlineDate: '2019-11-30T12:42:19.000Z',
      completedDate: '',
      completed: false,
    },
    {
      id: 3,
      title: 'task #3',
      description: 'description for task #3',
      priority: 'normal',
      createdDate: '2019-08-30T12:42:19.000Z',
      deadlineDate: '2020-11-30T12:42:19.000Z',
      completedDate: '',
      completed: false,
    },
    {
      id: 4,
      title: 'task #4',
      description: 'description for task #4',
      priority: 'very important',
      createdDate: '2019-06-30T12:42:19.000Z',
      deadlineDate: '2019-07-30T12:42:19.000Z',
      completedDate: '2019-06-30T12:42:19.000Z',
      completed: true,
    },
  ];

  private taskSource: BehaviorSubject<ITask[]> = new BehaviorSubject(this.tasks);
  public currentTasks: Observable<ITask[]> = this.taskSource.asObservable();

  constructor() {}

  public getTasks(): ITask[] {
    return this.tasks;
  }

  public deleteTask(id: number): void {
    const taskIndex: number = this.tasks.findIndex((task: ITask) => task.id === id);
    this.tasks = this.tasks.filter((_, index) => index !== taskIndex);
    this.taskSource.next(this.tasks);
  }
}
