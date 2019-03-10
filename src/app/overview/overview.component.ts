import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  user: string;
  constructor(private _authService: AuthService, private _router: Router) {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate(["login"]);
    }
  }

  ngOnInit() {
    this.user = this._authService.currentUser;
  }

  onLogout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
