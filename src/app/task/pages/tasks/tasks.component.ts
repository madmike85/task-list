import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ITask } from 'src/app/core/models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public tasks: ITask[];
  public displayedColumns: string[] = [
    'select',
    'title',
    'description',
    'priority',
    'createdDate',
    'deadlineDate',
    'completedDate',
    'completed',
    'controls',
  ];
  public dataSource: MatTableDataSource<ITask>;
  public selection = new SelectionModel<ITask>(true, []);

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    console.log(this.selection);
    this.taskService.currentTasks.subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
      this.dataSource = new MatTableDataSource<ITask>(this.tasks);
      console.log(tasks);
    });
  }

  public createTable(): void {
    this.tasks = this.taskService.getTasks();
    this.dataSource = new MatTableDataSource<ITask>(this.tasks);
  }

  public deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  public deleteManyTask(): void {
    this.selection.selected.forEach((task: ITask) => {
      this.taskService.deleteTask(task.id);
    });
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  public checkboxLabel(row?: ITask): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  public toggleTask(id: number): void {
    this.taskService.toggleTaskComplete(id);
  }
}
