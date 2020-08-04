import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item: SearchItem;
  @ViewChild('thumbnail') public thumbnail: ElementRef;
  public inputItem: SearchItem;
  public ngOnInit(): void {
    this.inputItem = this.item;
  }
  public ngAfterViewInit(): void {
    this.thumbnail.nativeElement.src = this.item.snippet.thumbnails.medium.url;
    console.log(this.thumbnail.nativeElement.src);
  }

}
