import { Injectable } from '@angular/core';
import { response } from '../search-response-exmpl';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public itemsArray: SearchItem[] = [];
  public sortWord: string = '';
  public sortByDateStrategyNumber: number = 2;
  public sortByViewsStrategyNumber: number = 2;
  public optionState: boolean = false;
  constructor() { }

  public changeSortWord(word: string): void {
    this.sortWord = word;
  }
  public changeSortByDateStrategyNumber(inputNumberDate: number): void {
    this.sortByDateStrategyNumber = inputNumberDate;
  }
  public changeSortByViewsStrategyNumber(inputNumberVies: number): void {
    this.sortByViewsStrategyNumber = inputNumberVies;
  }
  public switchState(): void {
    this.optionState === true ? this.optionState = false : this.optionState = true;
  }
  public startSearch(): void {
    this.itemsArray = response.items;
  }
}
