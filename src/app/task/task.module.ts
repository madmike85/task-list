import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskComponent } from './pages/task/task.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HighlightRedDirective } from './directives/highlight-red.directive';
import { LineThroughDirective } from './directives/line-through.directive';

@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskComponent,
    HighlightRedDirective,
    LineThroughDirective,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class TaskModule {}
