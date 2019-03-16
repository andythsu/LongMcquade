import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  raiseAlert: boolean;
  alertData: any;

  constructor() {}

  displayAlert(msg?, type?, callback?) {
    const message = msg ? msg : "no message initialized";
    type = type ? type : "info";
    this.alertData = {
      message,
      type
    };
    this.raiseAlert = true;
    setTimeout(() => {
      this.raiseAlert = false;
      this.resetField();
      if (callback) {
        callback();
      }
    }, 1500);
  }

  resetField() {
    this.alertData = {};
  }
}
