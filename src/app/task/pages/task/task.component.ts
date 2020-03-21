import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/core/models/task.model';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  public id: number;
  public taskForm: FormGroup;

  public priorities = ['normal', 'important', 'very important'];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const task: ITask = this.taskService.getTask(params.id);
      this.id = task.id;
      this.taskForm = this.formBuilder.group({
        id: new FormControl(task.id),
        title: new FormControl(task.title, [Validators.required]),
        description: new FormControl(task.description, [Validators.required]),
        priority: new FormControl(task.priority, [Validators.required]),
        createdDate: new FormControl(task.createdDate, [Validators.required]),
        deadlineDate: new FormControl(task.deadlineDate),
        completedDate: new FormControl(task.completedDate),
        completed: new FormControl(task.completed),
      });
    });
  }

  public onSave(form: FormGroup): void {
    this.taskService.updateTask(this.id, form.value);
    this.router.navigate(['/tasks']);
  }
}
