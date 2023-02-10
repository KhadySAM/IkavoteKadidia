import { TestBed } from '@angular/core/testing';

import { CodeVotantServiceService } from './code-votant-service.service';

describe('CodeVotantServiceService', () => {
  let service: CodeVotantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeVotantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
