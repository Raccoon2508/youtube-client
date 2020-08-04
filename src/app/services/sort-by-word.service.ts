import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortByWordService {
  public sortWord: string = '';
  constructor() { }
  public changeSortWord(word: string): void {
    this.sortWord = word;
    console.log(word);
  }
}
