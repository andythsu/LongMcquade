import { Component, OnInit } from "@angular/core";
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.username, this.password).then(res => {
      if (res.success) {
        console.log(res);
        if (res.type == "student") {
          this.router.navigate(["/student/overview"]);
        } else if (res.type == "tutor") {
          this.router.navigate(["/tutor/overview"]);
        }
      } else {
        console.log("wrong credentials");
      }
    });
  }
}