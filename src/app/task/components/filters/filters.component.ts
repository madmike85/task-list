import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  public setFilterCriteria(criteria: string): void {
    this.filterService.setFilterCriteria(criteria);
  }
}
