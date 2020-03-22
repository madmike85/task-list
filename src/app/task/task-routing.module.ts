import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskComponent } from './pages/task/task.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'tasks/newTask',
    component: NewTaskComponent,
  },
  {
    path: 'tasks/task/:id',
    component: TaskComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
