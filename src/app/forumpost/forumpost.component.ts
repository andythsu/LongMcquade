import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../services/user/user.service";
import { config } from "../utils/config";
import { AlertService } from "../services/alert/alert.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";

@Component({
  selector: "app-forumpost",
  templateUrl: "./forumpost.component.html",
  styleUrls: ["./forumpost.component.css"]
})
export class ForumPostComponent implements OnInit {
  subject: string;
  content: string;
  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  checkFields() {
    if (!this.subject || this.subject.trim().length == 0) {
      this.alertService.displayAlert("subject cannot be empty", "danger");
      return false;
    }
    if (!this.content || this.content.trim().length == 0) {
      this.alertService.displayAlert("content cannot be empty", "danger");
      return false;
    }
    return true;
  }

  onCancelBtn() {
    this.router.navigate(["../../forum"], {
      relativeTo: this.activatedRoute
    });
  }

  onSubmitBtn() {
    if (this.checkFields()) {
      this.httpClient
        .post<any>(config.server + config.forumApi, {
          userId: this.userService.getCurrentUser().id,
          subject: this.subject,
          content: this.content
        })
        .subscribe(res => {
          const { error } = res;
          if (error) {
            this.alertService.displayAlert(error.message, "danger");
          }
          this.alertService.displayAlert(
            "successfully posted",
            "success",
            () => {
              this.router.navigate(["../../home"], {
                relativeTo: this.activatedRoute
              });
            }
          );
        });
    }
  }
}
