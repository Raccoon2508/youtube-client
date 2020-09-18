import { Pipe } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { YoutubeService } from '../services/youtube-service.service';

@Pipe({
  name: 'sortByViews',
  pure: false
})
export class SortByViewsPipe {
  constructor(public youtubeService: YoutubeService) { }
  public transform(itemsArray: SearchItem[]): SearchItem[] {
    if (this.youtubeService.sortByDateStrategyNumber !== 2) { return itemsArray; }
    let filterStrategyViewsNumber: number = this.youtubeService.sortByViewsStrategyNumber;
    let [...tempArray] = itemsArray;
    function counterOfViews(item: SearchItem): number {
      return +item.statistics.viewCount;
    }
    if (filterStrategyViewsNumber === 0) {
      return tempArray.sort((a, b) => counterOfViews(a) - counterOfViews(b));
    } else if (filterStrategyViewsNumber === 1) {
      return tempArray.sort((a, b) => counterOfViews(b) - counterOfViews(a));
    }
    return tempArray;
  }
}
