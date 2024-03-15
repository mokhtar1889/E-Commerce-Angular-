import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { webGuard } from './web.guard';

describe('webGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => webGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
