import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { student } from "src/app/utils/interfaces/usertype";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/utils/config";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  user: student;
  upcomingClasses: any;
  oldClasses: any;

  constructor(
    private _userService: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.user = this._userService.getCurrentUser();
    this.httpClient
      .get(
        config.server +
          config.studentApi +
          "/" +
          this.user.id +
          "/upcomingClasses"
      )
      .subscribe(data => {
        this.upcomingClasses = data;
      });
    this.httpClient
      .get(
        config.server +
          config.studentApi +
          "/" +
          this.user.id +
          "/passedClasses"
      )
      .subscribe(data => {
        this.oldClasses = data;
      });
  }
}
