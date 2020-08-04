import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { response } from '../../search-response-exmpl';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchItemsArray: SearchItem[];
  constructor( public filterService: FilterService) {
    this.searchItemsArray = filterService.searchResults;
   }

  public ngOnInit(): void {
    
  }

  public ngDoCheck(): void {
    this.searchItemsArray = this.filterService.searchResults;
  }

}
