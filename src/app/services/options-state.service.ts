import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsStateService {
  public optionState: boolean = false;
  constructor() { }
  public switchState(): void {
    this.optionState === true ? this.optionState = false : this.optionState = true;
  }
}
