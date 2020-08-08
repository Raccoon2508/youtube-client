import { Pipe, PipeTransform } from '@angular/core';
import { YoutubeService } from '../services/youtube-service.service';

@Pipe({
  name: 'bigQuantityPipe',
  pure: false
})
export class BigQuantityPipe implements PipeTransform {
  constructor(public youtubeService: YoutubeService) { }
  public transform(viewNumber: number): string {
    if (viewNumber > 1000000) { return (viewNumber / 1000000).toFixed(1) + 'M'; }
    if (viewNumber > 1000) { return (viewNumber / 1000).toFixed(1) + 'K'; }
  }
}
