import { Component } from '@angular/core';
import { SearchResponse } from './models/search-result.model';
import { response } from './search-response-exmpl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public example: SearchResponse = response;
 public ngOnInit(): void {
   console.log(response.items[0].kind);
 }
}
