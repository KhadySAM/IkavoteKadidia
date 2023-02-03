import { TestBed } from '@angular/core/testing';

import { GenererQrCodeService } from './generer-qr-code.service';

describe('GenererQrCodeService', () => {
  let service: GenererQrCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenererQrCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
