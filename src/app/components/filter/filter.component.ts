import { Component,
         OnInit,
         Input,
         ElementRef,
         EventEmitter,
         ChangeDetectorRef,
         Injectable } from '@angular/core';
import { OptionsStateService } from '../../services/options-state.service';
import { FilterService } from '../../services/filter.service';
import { SortByWordService } from '../../services/sort-by-word.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class FilterComponent implements OnInit {
  @Input('filterWraper') public filterVisibility: ElementRef;
  public panelVisibility: Boolean;
  public sortDateCounter: number = 1;
  public sortViewsCounter: number = 1;
  public sortWord: string = '';
  public counter: number = 0;
  constructor( public optionsState: OptionsStateService,
               public cdr: ChangeDetectorRef,
               public filterService: FilterService,
               public sortByWordService: SortByWordService) { }
  public sortByDate(): void {
    this.filterService.sortByDate(this.sortDateCounter % 3);
    this.sortDateCounter++;
  }
  public sortByViews(): void {
    this.filterService.sortByViews(this.sortViewsCounter % 3);
    this.sortViewsCounter++;
  }
  public sortByWord(): void {
    this.sortByWordService.changeSortWord(this.sortWord);
  }
  public ngOnInit(): void {
  }

  public ngDoCheck(): void {
    this.panelVisibility = this.optionsState.optionState;
    this.sortByWordService.changeSortWord(this.sortWord);
  }
}
