import { TestBed } from '@angular/core/testing';

import { SortByDatePipe } from './sort-by-date.pipe';

describe('SortByDateService', () => {
  let service: SortByDatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortByDatePipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
