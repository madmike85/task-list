import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskComponent } from './pages/task/task.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HighlightRedDirective } from './directives/highlight-red.directive';
import { LineThroughDirective } from './directives/line-through.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterByPriorityPipe } from './pipes/filter-by-priority.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskComponent,
    HighlightRedDirective,
    LineThroughDirective,
    FiltersComponent,
    FilterByPriorityPipe,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class TaskModule {}
