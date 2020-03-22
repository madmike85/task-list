import { Injectable } from '@angular/core';
import { ITask } from 'src/app/core/models/task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { INewTask } from 'src/app/core/models/newTask.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  public getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>('tasks');
  }

  public getTask(id: string): Observable<ITask> {
    return this.http.get<ITask>(`tasks/${id}`);
  }

  public deleteTask(id: number): Observable<ITask[]> {
    return this.http.delete<ITask[]>(`tasks/${id}`);
  }

  public addTask(task: INewTask): void {
    this.http.post<ITask>(`tasks`, task).subscribe();
  }

  public updateTask(id: number, task: ITask): void {
    this.http.put<ITask>(`tasks/${id}`, task).subscribe();
  }

  public completeTask(id: number): Observable<ITask[]> {
    return this.http.patch<ITask[]>(`tasks/${id}`, { completed: true });
  }
}
