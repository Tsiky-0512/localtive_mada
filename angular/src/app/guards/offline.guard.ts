import {CanActivateFn, Router} from '@angular/router';
import {of} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../services/user/auth.service";

export const offlineGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isConnected()) {
    return router.navigate(["/"]);
  }
  return true;
};
