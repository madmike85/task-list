import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/core/models/task.model';
import { TaskService } from '../../services/task.service';
import { FilterService } from '../../services/filter.service';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public tasks: ITask[];

  public selection: Object = {};

  public filterCriteria = 'all';

  public isError = false;

  constructor(private taskService: TaskService, private filterService: FilterService) {}

  private toggleAll(state: boolean): void {
    this.tasks.forEach((task: ITask) => {
      this.selection[task.id] = state;
    });
  }

  public ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks: ITask[]) => {
        this.tasks = tasks;
      },
      (err) => {
        console.log(err);
        this.isError = true;
      },
    );
    this.filterService.currentFilerCriteria.subscribe(
      (criteria: string) => (this.filterCriteria = criteria),
    );
  }

  public deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
    });
  }

  public deleteManyTask(): void {
    Object.keys(this.selection).forEach((id: string) => {
      this.taskService.deleteTask(+id).subscribe((tasks: ITask[]) => {
        this.tasks = tasks;
      });
    });
  }

  public completeTask(id: number): void {
    this.taskService.completeTask(id).subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
    });
  }

  public addSelection(id: string, event: any): void {
    this.selection[id] = event.checked;
  }

  public getSelectionLength(): number {
    return Object.values(this.selection).filter((item: boolean) => item).length;
  }

  public masterToggle(event: any): void {
    if (event.checked && this.getSelectionLength() === 0) {
      this.toggleAll(true);
    } else if (!event.checked) {
      this.toggleAll(false);
    }
  }
}
