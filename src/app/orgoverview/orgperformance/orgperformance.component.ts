import { Component, OnInit } from "@angular/core";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "src/app/services/alert/alert.service";

@Component({
  selector: "app-orgperformance",
  templateUrl: "./orgperformance.component.html",
  styleUrls: ["./orgperformance.component.css"]
})
export class OrgPerformanceComponent implements OnInit {
  location: string;

  boxes: number[] = [];
  boxIndex: number = 0;
  boxValue: any = {};

  model: NgbDateStruct;
  date: { year: number; month: number };
  time = { hour: 0, minute: 0 };

  constructor(
    private calendar: NgbCalendar,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  addBox() {
    this.boxes.push(this.boxIndex);
    this.boxIndex += 1;
  }
  removeBox(box) {
    let index = this.boxes.indexOf(box);
    console.log("index", index);
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

    let instruments = [];
    this.boxes.map(box => instruments.push(this.boxValue[box]));
    console.log(instruments);

    const month =
      this.model.month >= 10 ? this.model.month : "0" + this.model.month;
    const day = this.model.day >= 10 ? this.model.day : "0" + this.model.day;
    const hour = this.time.hour >= 10 ? this.time.hour : "0" + this.time.hour;
    const minute =
      this.time.minute >= 10 ? this.time.minute : "0" + this.time.minute;
    let d =
      this.model.year + "-" + month + "-" + day + " " + hour + ":" + minute;
    console.log(d);
  }
}
