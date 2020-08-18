import { Component } from '@angular/core';
import { SearchResponse } from './youtube/models/search-result.model';
import { response } from './search-response-exmpl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public example: SearchResponse = response;
 // tslint:disable-next-line: typedef
 public title(title: string) {
   throw new Error('Method not implemented.');
 }
 public ngOnInit(): void {
   console.log(this.example.items[0].kind);
 }
}
