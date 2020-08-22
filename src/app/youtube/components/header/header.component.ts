import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public optionsButtonToggle: EventEmitter<undefined> = new EventEmitter;
  constructor(public youtubeService: YoutubeService) { }

  public optionsToggle(): void {
    this.youtubeService.switchState();
  }
  public ngOnInit(): void {
  }
}
