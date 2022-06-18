import { TestBed } from '@angular/core/testing';

import { AuntenticacaoGuard } from './auntenticacao.guard';

describe('AuntenticacaoGuard', () => {
  let guard: AuntenticacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuntenticacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
