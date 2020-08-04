import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { OptionsStateService } from '../../services/options-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public optionsButtonToggle: EventEmitter<undefined> = new EventEmitter;
  constructor( public optionsToggleService: OptionsStateService) { }

  public optionsToggle(): void {
    this.optionsToggleService.switchState();
  }
  public ngOnInit(): void {
  }
}
