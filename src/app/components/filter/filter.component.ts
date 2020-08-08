import { Component,
         OnInit,
         Input,
         ElementRef,
         EventEmitter,
         ChangeDetectorRef,
         Injectable } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service.service';

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
  constructor( public cdr: ChangeDetectorRef,
               public youtubeService: YoutubeService) { }
  public sortByDate(): void {
    this.youtubeService.changeSortByDateStrategyNumber(this.sortDateCounter % 3);
    this.sortDateCounter++;
  }
  public sortByViews(): void {
    this.youtubeService.changeSortByViewsStrategyNumber(this.sortViewsCounter % 3);
    this.sortViewsCounter++;
  }
  public sortByWord(): void {
    this.youtubeService.changeSortWord(this.sortWord);
  }
  public ngOnInit(): void {
  }

  public ngDoCheck(): void {
    this.panelVisibility = this.youtubeService.optionState;
    this.youtubeService.changeSortWord(this.sortWord);
  }
}
