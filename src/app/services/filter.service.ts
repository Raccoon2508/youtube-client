import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SearchService } from '../services/search.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public searchResults: SearchItem[];
  constructor( public searchService: SearchService) {
    [...this.searchResults] = this.searchService.itemsArray;
   }
  public sortByDate(counter: number): void {
    function publishingDate(item: SearchItem): number {
      return +new Date(item.snippet.publishedAt);
    }
    if (counter === 0) {
      this.searchResults.sort((a, b) => publishingDate(a) - publishingDate(b));
    } else if (counter === 1) {
      this.searchResults.sort((a, b) => publishingDate(b) - publishingDate(a));
    } else if (counter === 2) { [...this.searchResults] = this.searchService.itemsArray;  }
  }
  public sortByViews(counter: number): void {
    function counterOfViews(item: SearchItem): number {
      return +item.statistics.viewCount;
    }
    console.log(counter);
    if (counter === 0) {
      this.searchResults.sort((a, b) => counterOfViews(a) - counterOfViews(b));
    } else if (counter === 1) {
      this.searchResults.sort((a, b) => counterOfViews(b) - counterOfViews(a));
    } else if (counter === 2) { [...this.searchResults] = this.searchService.itemsArray; }
  }
}
