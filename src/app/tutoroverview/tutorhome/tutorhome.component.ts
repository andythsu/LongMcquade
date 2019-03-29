import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { tutor } from "src/app/utils/interfaces/usertype";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/utils/config";

@Component({
  selector: "app-tutorhome",
  templateUrl: "./tutorhome.component.html",
  styleUrls: ["./tutorhome.component.css"]
})
export class TutorHomeComponent implements OnInit {
  user: tutor;

  upcomingClasses: any;
  oldClasses: any;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.httpClient
      .get<any>(
        config.server +
          config.tutorApi +
          "/" +
          this.user.id +
          "/upcomingClasses"
      )
      .subscribe(data => {
        data = data.map(d => {
          const localDate = new Date(d.time).toLocaleDateString();
          const localTime = new Date(d.time).toLocaleTimeString();
          return { ...d, time: localDate + " " + localTime };
        });
        this.upcomingClasses = data;
      });
    this.httpClient
      .get<any>(
        config.server + config.tutorApi + "/" + this.user.id + "/passedClasses"
      )
      .subscribe(data => {
        data = data.map(d => {
          const localDate = new Date(d.time).toLocaleDateString();
          const localTime = new Date(d.time).toLocaleTimeString();
          return { ...d, time: localDate + " " + localTime };
        });
        this.oldClasses = data;
      });
  }
}
