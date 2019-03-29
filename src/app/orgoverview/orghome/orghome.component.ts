import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { organization } from "src/app/utils/interfaces/usertype";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/utils/config";

@Component({
  selector: "app-orghome",
  templateUrl: "./orghome.component.html",
  styleUrls: ["./orghome.component.css"]
})
export class OrgHomeComponent implements OnInit {
  user: organization;
  performances: any;
  oldPerformances: any;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.httpClient
      .get<any>(
        config.server + config.orgApi + "/" + this.user.id + "/performance"
      )
      .subscribe(data => {
        this.performances = data;
      });
    this.httpClient
      .get<any>(
        config.server + config.orgApi + "/" + this.user.id + "/oldPerformance"
      )
      .subscribe(data => {
        this.oldPerformances = data;
      });
  }
}
