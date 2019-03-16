import { Component, OnInit } from "@angular/core";

import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/utils/config";
import { UserService } from "src/app/services/user/user.service";
import { AlertService } from "src/app/services/alert/alert.service";

@Component({
  selector: "app-tutoravailabletime",
  templateUrl: "./tutoravailabletime.component.html",
  styleUrls: ["./tutoravailabletime.component.css"]
})
export class TutoravailabletimeComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };
  time = { hour: 0, minute: 0 };
  availabilities: any;

  constructor(
    private httpClient: HttpClient,
    private calendar: NgbCalendar,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.httpClient
      .get<any>(
        config.server +
          config.tutorApi +
          "/" +
          this.userService.getCurrentUser().id +
          "/availableTime"
      )
      .subscribe(data => {
        data = data.map(d => {
          const localDate = new Date(d.time).toLocaleDateString();
          const localTime = new Date(d.time).toLocaleTimeString();
          return {
            ...d,
            EST: localDate + " " + localTime
          };
        });
        this.availabilities = data;
      });
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
  onSubmitBtn() {
    if (!this.model) {
      this.alertService.displayAlert("choose a date", "danger");
      return;
    }
    const month =
      this.model.month >= 10 ? this.model.month : "0" + this.model.month;
    const day = this.model.day >= 10 ? this.model.day : "0" + this.model.day;
    const hour = this.time.hour >= 10 ? this.time.hour : "0" + this.time.hour;
    const minute =
      this.time.minute >= 10 ? this.time.minute : "0" + this.time.minute;
    let d =
      this.model.year + "-" + month + "-" + day + " " + hour + ":" + minute;
    this.httpClient
      .post<any>(config.server + config.tutorApi + "/availableTime", {
        time: d,
        tutorId: this.userService.getCurrentUser().id
      })
      .subscribe(result => {
        const { error } = result;
        if (error) {
          this.alertService.displayAlert(error.message, "danger");
          return;
        }
        let newDate = new Date(d);

        const { insertId } = result;
        this.availabilities.push({
          insertId,
          tutorId: this.userService.getCurrentUser().id,
          EST: newDate.toLocaleDateString() + " " + newDate.toLocaleTimeString()
        });
        this.alertService.displayAlert("inserted successfully", "success");
      });
  }
}
