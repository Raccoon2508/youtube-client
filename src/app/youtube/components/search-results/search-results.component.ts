import { Component, OnInit, Input, Output, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube-service.service';
import { Observable } from 'rxjs';
import { SearchResponse } from '../../models/search-result.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchItemsArray: SearchItem[];
  public timer: Number = 0;
  constructor( public youtubeService: YoutubeService,
               public cdr: ChangeDetectorRef) {
    this.youtubeService.getVideosList().subscribe((data: Observable<unknown>) => {
      data.subscribe((response: SearchResponse) => {
      let jsonResponse: string = JSON.stringify(response.items);
      if (response.items.length) {
      this.searchItemsArray = response.items;
      localStorage.setItem('searchResponse', jsonResponse);
      }
    });
    });
  }

  public ngOnInit(): void {
    this.searchItemsArray = JSON.parse(localStorage.getItem('searchResponse')) || [];
  }

  public ngDoCheck(): void {
  }
}
