import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  resetField() {
    this.username = "";
    this.password = "";
    this.usernameFieldElement.nativeElement.focus();
  }

  onSignIn() {
    this.router.navigate(["signin"]);
  }

  onSubmit() {
    this.authService.login(this.username, this.password).then(res => {
      if (res.success) {
        if (res.type == "student") {
          this.router.navigate(["/student/overview"]);
        } else if (res.type == "tutor") {
          this.router.navigate(["/tutor/overview"]);
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
}
