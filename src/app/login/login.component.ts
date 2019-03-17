import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { UserTypeEnum } from "../utils/constants/usertype";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  alertData: any;
  raiseAlert: boolean = false;

  @ViewChild("usernameField")
  usernameFieldElement: ElementRef;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {}

  onSignup() {
    this._router.navigate(["signup"]);
  }

  onSubmit() {
    this._authService.login(this.username, this.password).then(res => {
      if (res.success) {
        if (res.type == UserTypeEnum.STUDENT) {
          this._router.navigate(["/student/overview"]);
        } else if (res.type == UserTypeEnum.TUTOR) {
          this._router.navigate(["/tutor/overview"]);
        } else if (res.type == UserTypeEnum.MUSICIAN) {
          this._router.navigate(["/musician/overview"]);
        } else if (res.type == UserTypeEnum.ORGANIZATION) {
          this._router.navigate(["/org/overview"]);
        }
      } else {
        this.alertData = {
          message: "Wrong Credentials",
          type: "danger"
        };
        this.raiseAlert = true;
        setTimeout(() => {
          this.raiseAlert = false;
        }, 1500);
        this.resetField();
      }
    });
  }

  resetField() {
    this.username = "";
    this.password = "";
    this.usernameFieldElement.nativeElement.focus();
  }
}
