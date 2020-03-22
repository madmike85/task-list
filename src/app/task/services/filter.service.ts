import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterCriteriaSource: BehaviorSubject<string> = new BehaviorSubject('all');
  public currentFilerCriteria: Observable<string> = this.filterCriteriaSource.asObservable();

  constructor() {}

  public setFilterCriteria(criteria: string): void {
    this.filterCriteriaSource.next(criteria);
  }
}
