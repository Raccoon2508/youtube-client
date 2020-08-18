import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {
  @ViewChild('thumbnail') public thumbnail: ElementRef;
  public item: SearchItem;
  constructor(public location: Location) { }
  public goBack(): void {
    this.location.back();
  }
  public ngAfterViewInit(): void {
    this.thumbnail.nativeElement.src = `https://www.youtube.com/embed/${this.item.id}`;
  }

  public ngOnInit(): void {
    this.item = history.state;
    console.log(this.item);
  }
}
