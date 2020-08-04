import { TestBed } from '@angular/core/testing';

import { FilterByWordPipe } from './filter-by-words.pipe';

describe('SortByWordsService', () => {
  let service: FilterByWordPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterByWordPipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
