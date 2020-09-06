import { Component } from '@angular/core';
import { SearchResponse } from './youtube/models/search-result.model';
import { response } from './search-response-exmpl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tslint:disable-next-line: typedef
  public ngOnInit(): void {
 }
}
