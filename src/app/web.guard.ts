import { CanActivateFn } from '@angular/router';

export const webGuard: CanActivateFn = (route, state) => {
  return true;
};
