import { TestBed } from '@angular/core/testing';

import { OptionsStateService } from './options-state.service';

describe('OptionsStateService', () => {
  let service: OptionsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
