import { Component, OnInit, Input, ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { OptionsStateService } from '../../services/options-state.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input('filterWraper') public filterVisibility: ElementRef;
  public panelVisibility: Boolean;
  public sortDateCounter: number = 1;
  public sortViewsCounter: number = 1;
  constructor( public optionsState: OptionsStateService,
               public cdr: ChangeDetectorRef,
               public filterService: FilterService) { }
  public sortByDate(): void {
    this.filterService.sortByDate(this.sortDateCounter % 3);
    this.sortDateCounter++;
  }
  public sortByViews(): void {
    this.filterService.sortByViews(this.sortViewsCounter % 3);
    this.sortViewsCounter++;
  }

  public ngOnInit(): void {
  }

  public ngDoCheck(): void {
    this.panelVisibility = this.optionsState.optionState;
  }
}
