import { TestBed } from '@angular/core/testing';

import { SortByViewsPipe } from './sort-by-views.pipe';

describe('SortByViewsService', () => {
  let service: SortByViewsPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortByViewsPipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
