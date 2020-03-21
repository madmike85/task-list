import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskComponent } from './pages/task/task.component';

@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  imports: [CommonModule, TaskRoutingModule],
})
export class TaskModule {}
