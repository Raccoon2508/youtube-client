import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { Router } from '@angular/router';
import { ColorBorderDateDirective } from '../../directives/color-border-date.directive';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item: SearchItem;
  @ViewChild('thumbnail') public thumbnail: ElementRef;
  public inputItem: SearchItem;
  constructor(public router: Router) {}
  public ngOnInit(): void {
    this.inputItem = this.item;
  }
  public ngAfterViewInit(): void {
    this.thumbnail.nativeElement.src = this.item.snippet.thumbnails.medium.url;
  }
  public detailedInfo(): void {
    this.router.navigate([`search/${this.inputItem.id}`], { state: this.item } );
  }
}
