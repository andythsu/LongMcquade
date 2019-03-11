import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tutoroverview",
  templateUrl: "./tutoroverview.component.html",
  styleUrls: ["./tutoroverview.component.css"]
})
export class TutorOverviewComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {}

  onLogout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
