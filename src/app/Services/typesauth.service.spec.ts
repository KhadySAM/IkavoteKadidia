import { TestBed } from '@angular/core/testing';

import { TypesauthService } from './typesauth.service';

describe('TypesauthService', () => {
  let service: TypesauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
