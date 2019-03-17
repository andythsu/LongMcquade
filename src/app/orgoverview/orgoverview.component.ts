import { Component, OnInit } from "@angular/core";
import { AlertService } from "../services/alert/alert.service";
import { AuthService } from "../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-orgoverview",
  templateUrl: "./orgoverview.component.html",
  styleUrls: ["./orgoverview.component.css"]
})
export class OrgOverviewComponent implements OnInit {
  constructor(
    public alertService: AlertService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {}

  onLogout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
