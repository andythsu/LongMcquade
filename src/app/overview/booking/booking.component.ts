import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { UserGenderEnum } from "../../utils/constants/userGender";
import { AlertService } from "src/app/services/alert/alert.service";
import { UserService } from "src/app/services/user/user.service";
import { config } from "src/app/utils/config";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
  tutorList: any;

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.httpClient
      .get<any>(config.server + config.tutorApi + "/availableTime")
      .subscribe(data => {
        this.tutorList = data;
      });
  }

  onBookBtn(tutor) {
    const currentUserId = this.userService.getCurrentUser().id;
    const tutorId = tutor.tutorId;
    const availableTimeId = tutor.available_time_id;
    this.httpClient
      .post<any>(config.server + config.tutorApi + "/book", {
        studentId: currentUserId,
        tutorId,
        available_time: availableTimeId
      })
      .subscribe(result => {
        const { error } = result;
        if (error) {
          this.alertService.displayAlert(error.message, "danger");
          console.error(error);
          return;
        }
        this.alertService.displayAlert("successfully booked", "success");
        // remove from tutorList array
        this.tutorList = this.tutorList.filter(
          list => list.available_time_id !== tutor.available_time_id
        );
      });
  }
}
