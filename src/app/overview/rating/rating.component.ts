import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/utils/config";
import { AlertService } from "src/app/services/alert/alert.service";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  passedClassesTutors: any;
  rate: Number = 1;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.httpClient
      .get<any>(
        config.server +
          config.studentApi +
          "/" +
          this.userService.getCurrentUser().id +
          "/passedClassesTutors"
      )
      .subscribe(results => {
        results = results.map(result => {
          return {
            ...result,
            rate: 1
          };
        });
        this.passedClassesTutors = results;
      });
  }

  onSubmitBtn(tutor) {
    this.httpClient
      .post<any>(
        config.server +
          config.studentApi +
          "/" +
          this.userService.getCurrentUser().id +
          "/rateTutor",
        {
          tutorId: tutor.tutorId,
          studentId: this.userService.getCurrentUser().id,
          rate: tutor.rate
        }
      )
      .subscribe(result => {
        const { error } = result;
        if (error) {
          this.alertService.displayAlert(error.sqlMessage, "danger");
        }
        this.alertService.displayAlert(
          `successfully rated ${tutor.name}`,
          "success"
        );
      });
  }
}
