import { TestBed, inject } from '@angular/core/testing';

import { OrderMDService } from './order-md.service';

describe('OrderMDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderMDService]
    });
  });

  it('should be created', inject([OrderMDService], (service: OrderMDService) => {
    expect(service).toBeTruthy();
  }));
});
