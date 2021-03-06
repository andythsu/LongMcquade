import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { UserService } from "../services/user/user.service";
import {
  student,
  tutor,
  musician,
  organization
} from "../utils/interfaces/usertype";
import { AlertService } from "../services/alert/alert.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  user: student | tutor | musician | organization;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private userService: UserService,
    public alertService: AlertService
  ) {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate(["login"]);
    }
  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  onLogout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
