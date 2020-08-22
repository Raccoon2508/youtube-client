import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchItemsArray: SearchItem[];
  constructor( public youtubeService: YoutubeService) {
    this.searchItemsArray = youtubeService.itemsArray;
   }

  public ngOnInit(): void {

  }

  public ngDoCheck(): void {
    this.searchItemsArray = this.youtubeService.itemsArray;
  }

}
