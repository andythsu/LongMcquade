import { Component, OnInit } from "@angular/core";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "src/app/services/alert/alert.service";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/utils/config";
import { UserService } from "src/app/services/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-orgperformance",
  templateUrl: "./orgperformance.component.html",
  styleUrls: ["./orgperformance.component.css"]
})
export class OrgPerformanceComponent implements OnInit {
  location: string;
  name: string;

  boxes: number[] = [];
  boxIndex: number = 0;
  boxValue: any = {};

  model: NgbDateStruct;
  date: { year: number; month: number };
  time = { hour: 0, minute: 0 };

  constructor(
    private calendar: NgbCalendar,
    private alertService: AlertService,
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  addBox() {
    this.boxes.push(this.boxIndex++);
  }
  removeBox(box) {
    let index = this.boxes.indexOf(box);
    if (index > -1) {
      this.boxes.splice(index, 1);
    }
  }
  onSubmit() {
    if (!this.model) {
      this.alertService.displayAlert("you must specify a date", "danger");
      return;
    }

    if (!this.location) {
      this.alertService.displayAlert("you must specify a location", "danger");
      return;
    }

    if (!this.name) {
      this.alertService.displayAlert("you must specify a name", "danger");
      return;
    }

    let instruments = [];
    this.boxes.map(box => {
      if (this.boxValue[box]) {
        instruments.push(this.boxValue[box]);
      }
    });

    const month =
      this.model.month >= 10 ? this.model.month : "0" + this.model.month;
    const day = this.model.day >= 10 ? this.model.day : "0" + this.model.day;
    const hour = this.time.hour >= 10 ? this.time.hour : "0" + this.time.hour;
    const minute =
      this.time.minute >= 10 ? this.time.minute : "0" + this.time.minute;
    let d =
      this.model.year + "-" + month + "-" + day + " " + hour + ":" + minute;

    this.httpClient
      .post<any>(
        config.server +
          config.orgApi +
          "/" +
          this.userService.getCurrentUser().id +
          "/performance",
        {
          location: this.location,
          time: d,
          instruments,
          name: this.name
        }
      )
      .subscribe(result => {
        if (result.error) {
          this.alertService.displayAlert(result.error.message, "danger");
          return;
        }
        this.alertService.displayAlert("successfully posted", "success", () => {
          this.router.navigate(["../home"], {
            relativeTo: this.activatedRoute
          });
        });
      });
  }
}
