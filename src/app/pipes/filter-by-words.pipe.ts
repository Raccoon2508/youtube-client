import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SortByWordService } from '../services/sort-by-word.service';

@Pipe({ name: 'filterByWord',
        pure: false })
export class FilterByWordPipe implements PipeTransform {
  constructor(public sortByWord: SortByWordService ) { }
  public transform(itemsArray: SearchItem[], filterWord: string): SearchItem[] {
    let resultArray: SearchItem[];
    let sortWord: string = this.sortByWord.sortWord;
    function title(item: SearchItem, word: string): Boolean {
       return item.snippet.title.includes(word);
    }
    resultArray = itemsArray.filter( item => title(item, sortWord));
    return resultArray;
  }
}
