import { TestBed, inject } from '@angular/core/testing';

import { ServerRequestingService } from './server-requesting.service';

describe('ServerRequestingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerRequestingService]
    });
  });

  it('should be created', inject([ServerRequestingService], (service: ServerRequestingService) => {
    expect(service).toBeTruthy();
  }));
});
