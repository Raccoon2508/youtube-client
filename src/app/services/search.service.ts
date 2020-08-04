import { Injectable } from '@angular/core';
import { response } from '../search-response-exmpl';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public itemsArray: SearchItem[] = response.items;

  constructor() { }
}
