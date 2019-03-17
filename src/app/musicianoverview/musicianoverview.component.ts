import { Component, OnInit } from "@angular/core";
import { AlertService } from "../services/alert/alert.service";
import { AuthService } from "../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-musicianoverview",
  templateUrl: "./musicianoverview.component.html",
  styleUrls: ["./musicianoverview.component.css"]
})
export class MusicianOverviewComponent implements OnInit {
  constructor(
    private alertService: AlertService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {}

  onLogout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
