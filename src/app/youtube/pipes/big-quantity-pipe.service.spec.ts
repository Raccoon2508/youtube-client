import { TestBed } from '@angular/core/testing';

import { BigQuantityPipe } from './big-quantity-pipe.pipe';

describe('BigQuantityPipeService', () => {
  let service: BigQuantityPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigQuantityPipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
