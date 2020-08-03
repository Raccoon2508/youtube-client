import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item: SearchItem;
  public inputItem: SearchItem;

  public ngOnInit(): void {
    this.inputItem = this.item;
  }

}
