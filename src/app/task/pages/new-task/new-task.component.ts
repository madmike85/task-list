import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  public taskForm: FormGroup;

  public priorities = ['normal', 'important', 'very important'];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      id: new FormControl(12),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      createdDate: new FormControl(new Date(Date.now()).toISOString(), [Validators.required]),
      deadlineDate: new FormControl(''),
      completedDate: new FormControl(''),
      completed: new FormControl(false),
    });
  }

  public onSave(form: FormGroup): void {
    this.taskService.addTask(form.value);
    this.router.navigate(['/tasks']);
  }
}
