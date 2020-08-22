import { Pipe } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { YoutubeService } from '../services/youtube-service.service';

@Pipe({
  name: 'sortByDate',
  pure: false
})
export class SortByDatePipe {
  constructor( public youtubeService: YoutubeService) { }
  public transform(itemsArray: SearchItem[]): SearchItem[] {
    if (this.youtubeService.sortByViewsStrategyNumber !== 2) { return itemsArray; }
    let filterStrategyNumber: number = this.youtubeService.sortByDateStrategyNumber;
    let [...itemsTempArray] = itemsArray;
    function publishingDate(item: SearchItem): number {
      return +new Date(item.snippet.publishedAt);
    }
    if (filterStrategyNumber === 0) {
      return itemsTempArray.sort((a, b) => publishingDate(a) - publishingDate(b));
    } else if (filterStrategyNumber === 1) {
      return itemsTempArray.sort((a, b) => publishingDate(b) - publishingDate(a));
    }
    return itemsTempArray;
  }
}
