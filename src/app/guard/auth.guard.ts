import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (window.localStorage.getItem('jwt')) return true;
  return false;
};
