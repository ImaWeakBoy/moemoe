import { TestBed, inject } from '@angular/core/testing';

import { CustListService } from './cust-list.service';

describe('CustListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustListService]
    });
  });

  it('should be created', inject([CustListService], (service: CustListService) => {
    expect(service).toBeTruthy();
  }));
});
