import { Directive, Input, HostBinding } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Directive({
  selector: '[appColorBorderDate]'
})
export class ColorBorderDateDirective {
  @Input() public item: SearchItem;
  public currentDate: Date = new Date();
  public date: Date;
  public daysDiff: number;
  public defaultBorderBottomColor: string = 'red';
  constructor() { }
  @HostBinding('style.borderBottomColor') get colorBorder(): string {
    if (this.daysDiff > 180) { return 'rgb(255, 132, 132)'; }
    if (this.daysDiff <= 7) { return 'rgb(132, 255, 132)'; }
    if (this.daysDiff <= 31) { return 'rgb(132, 132, 255)'; }
    return 'rgb(255, 132, 132)';
  }
  public ngOnInit(): void {
    this.defaultBorderBottomColor = 'red';
    this.date = new Date(this.item.snippet.publishedAt);
    this.daysDiff = Math.floor((+this.currentDate - +this.date) / 1000 / 60 / 60 / 24);
  }
}
