import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { YoutubeService } from '../services/youtube-service.service';

@Pipe({ name: 'filterByWord',
        pure: false })
export class FilterByWordPipe implements PipeTransform {
  constructor(public youtubeService: YoutubeService ) { }
  public transform(itemsArray: SearchItem[], filterWord: string): SearchItem[] {
    let resultArray: SearchItem[];
    let sortWord: string = this.youtubeService.sortWord;
    function title(item: SearchItem, word: string): Boolean {
       return (item.snippet.title.toLowerCase()).includes(word);
    }
    resultArray = itemsArray.filter( item => title(item, sortWord));
    return resultArray;
  }
}
