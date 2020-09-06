import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { bufferCount, filter, debounce, map } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public myForm: FormGroup;
  public searchInput: string = '';
  public timer: number = 0;
   constructor( public youtubeService: YoutubeService,
                public formBuilder: FormBuilder) { }
   public ngOnInit(): void {
     this.myForm = this.formBuilder.group({
       searchInput: [this.searchInput]
     });
     this.myForm.controls.searchInput.valueChanges
       .pipe(filter(item => item.length > 3),
             map((input) => {
             if (this.timer === 0) { this.debounceTimer(); }
             return input; }),
             debounce(() => interval(3000))
             )
       .subscribe(input => {
         if (this.searchInput) { this.youtubeService.searchVideo(input); }
       });
  }

  public debounceTimer(): void {
    // tslint:disable-next-line: typedef
    for (let i = 3; i >= 0; i--) {
      setTimeout(() => this.timer = i, 1000 * (3 - i));
    }
  }
  public search(): void {
     this.youtubeService.searchVideo(this.searchInput);
  }

}
