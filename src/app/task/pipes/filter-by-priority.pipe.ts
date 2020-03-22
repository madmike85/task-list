import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from 'src/app/core/models/task.model';

@Pipe({
  name: 'filterByPriority',
})
export class FilterByPriorityPipe implements PipeTransform {
  transform(value: ITask[] = [], criteria: string): ITask[] {
    if (criteria === 'all') {
      return value;
    }

    return value.filter((task: ITask) => task.priority === criteria);
  }
}
