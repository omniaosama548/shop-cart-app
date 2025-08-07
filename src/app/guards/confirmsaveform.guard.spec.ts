import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { confirmsaveformGuard } from './confirmsaveform.guard';

describe('confirmsaveformGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => confirmsaveformGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
