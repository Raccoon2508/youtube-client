import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   constructor( public youtubeService: YoutubeService) { }
   public ngOnInit(): void {
  }
  public search(): void {
     this.youtubeService.startSearch();
  }

}
