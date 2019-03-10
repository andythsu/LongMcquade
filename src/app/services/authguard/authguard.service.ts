import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthguardService implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._authService.isAuthenticated()) {
      return true;
    }
    this._router.navigate(["/login"]);
    return false;
  }
}
