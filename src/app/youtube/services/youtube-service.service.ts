import { Injectable } from '@angular/core';
import { response } from '../../search-response-exmpl';
import { SearchItem } from '../models/search-item.model';
import { youtubeKey } from 'src/assets/youtube-key';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SearchResponse } from '../models/search-result.model';
import { YoutubeSearchListResponse, Item } from '../models/youtube-searchlist-response';
import { Observable, Subject } from 'rxjs';
import { mergeMap, multicast } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public itemsArray: SearchItem[] = [];
  public sortWord: string = '';
  public sortByDateStrategyNumber: number = 2;
  public sortByViewsStrategyNumber: number = 2;
  public optionState: boolean = false;
  public youtubeSearchApiLink: string =
    'https://www.googleapis.com/youtube/v3/search';
  public youtubeVideosApiLink: string =
    'https://www.googleapis.com/youtube/v3/videos';
  public searchSubject: Subject<Observable<SearchResponse>> = new Subject();
  public timer: number = 0;
  public youtubeAccessKey: string = null;
  constructor(public http: HttpClient,
              public authService: AuthService) {
                this.authService.authYoutbeKeyEmit.subscribe(key => {
                  if (key) { this.youtubeAccessKey = key;
                             localStorage.setItem('youtubeKey', key);
                  }
                });
              }

  public changeSortWord(word: string): void {
    this.sortWord = word;
  }
  public changeSortByDateStrategyNumber(inputNumberDate: number): void {
    this.sortByDateStrategyNumber = inputNumberDate;
  }
  public changeSortByViewsStrategyNumber(inputNumberVies: number): void {
    this.sortByViewsStrategyNumber = inputNumberVies;
  }
  public switchState(): void {
    this.optionState === true
      ? (this.optionState = false)
      : (this.optionState = true);
  }
  public searchVideo(word: string): void {
    let params: {} = {
      // query params for first response
      q: word,
      key: youtubeKey,
      maxResults: 24,
    };

    function getVideosId (videoResponse: YoutubeSearchListResponse): string[] { // get ids from first response
      let idArray: string[] = [];
      videoResponse.items.forEach((item: Item) => {
          if (item.id.videoId) {
            idArray.push(item.id.videoId);
          }});
      return idArray;
    }

    let searchReq: Observable<SearchResponse> = this.http.get(
    this.youtubeSearchApiLink, {params}
    ).pipe(mergeMap( (result: YoutubeSearchListResponse) => {
       const idsArray: string[] = getVideosId(result);
       let searchVideoListParams: {} = {
         // query params for videos list response
         part: 'snippet,statistics',
         id: idsArray,
         key: youtubeKey,
       };
       return this.http.get(this.youtubeVideosApiLink, {
         params: searchVideoListParams }
       ) as Observable<SearchResponse>;
      }));
    this.searchSubject.next(searchReq);
 }

  public getVideosList(): Observable<Observable<SearchResponse>> {
   return this.searchSubject.asObservable();
 }
}
