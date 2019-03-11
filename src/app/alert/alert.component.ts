import { Component, OnInit, Input, OnDestroy, ElementRef } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input("data")
  public data: any;

  public message: string = "general message";

  public type: string = "primary";

  DURATION = 1500;
  public display: boolean = true;

  constructor() {}

  ngOnInit() {
    this.initField();
  }
  initField() {
    if (this.data !== undefined) {
      this.message = this.data.message ? this.data.message : "general message";
      this.type = this.data.type ? this.data.type : "primary";
    }
  }
  ngOnDestroy() {
    this.resetField();
  }

  resetField() {
    this.message = "general message";
    this.type = "primary";
  }
}
