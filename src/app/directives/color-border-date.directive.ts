import { Directive, HostListener, Input, HostBinding } from '@angular/core';
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
    if (this.daysDiff > 180) { return 'red'; }
    if (this.daysDiff <= 7) { return 'blue'; }
    if (this.daysDiff <= 31) { return 'green'; }
  }
  public ngOnInit(): void {
    this.defaultBorderBottomColor = 'red';
    this.date = new Date(this.item.snippet.publishedAt);
    this.daysDiff = Math.floor((+this.currentDate - +this.date) / 1000 / 60 / 60 / 24);
  }
}
