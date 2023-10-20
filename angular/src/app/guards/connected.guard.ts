import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/user/auth.service";

export const connectedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isConnected()) {
    return true;
  }
  return router.navigate(["/user", "login"]);
};
