import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserTypeEnum } from "../utils/constants/usertype";

import { config } from "../utils/config";

import {
  student,
  tutor,
  musician,
  organization
} from "../utils/interfaces/usertype";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public alertData: any;
  public raiseAlert: boolean = false;
  public UserTypeEnum: any;

  public username: string;
  public password: string;
  public age: Number;
  public gender: Number = 0;

  public showStudentSignup: boolean = true;
  public showTutorSignup: boolean = false;
  public showMusicianSignup: boolean = false;
  public showOrganizationSignup: boolean = false;

  public student: student = {
    instrument: "",
    type: UserTypeEnum.STUDENT
  };

  public tutor: tutor = {
    instrument: "",
    location: "",
    type: UserTypeEnum.TUTOR
  };

  public musician: musician = {
    instrument: "",
    type: UserTypeEnum.MUSICIAN
  };

  public organization: organization = {
    orgName: "",
    type: UserTypeEnum.ORGANIZATION
  };

  constructor(private _router: Router, private httpClient: HttpClient) {}

  ngOnInit() {
    this.UserTypeEnum = UserTypeEnum;
  }

  onSignupType(type) {
    if (type === this.UserTypeEnum.STUDENT) {
      this.showStudentSignup = true;
      this.showTutorSignup = false;
      this.showMusicianSignup = false;
      this.showOrganizationSignup = false;
    } else if (type === this.UserTypeEnum.TUTOR) {
      this.showTutorSignup = true;
      this.showStudentSignup = false;
      this.showMusicianSignup = false;
      this.showOrganizationSignup = false;
    } else if (type === this.UserTypeEnum.MUSICIAN) {
      this.showMusicianSignup = true;
      this.showTutorSignup = false;
      this.showStudentSignup = false;
      this.showOrganizationSignup = false;
    } else if (type === this.UserTypeEnum.ORGANIZATION) {
      this.showOrganizationSignup = true;
      this.showMusicianSignup = false;
      this.showTutorSignup = false;
      this.showStudentSignup = false;
    } else {
      console.error("cannot determine student type");
    }
  }

  postToDb(data) {
    this.httpClient
      .post<any>(config.server + "/user", data)
      .subscribe(result => {
        const { error } = result;
        if (error) {
          this.displayAlert(error.message, "danger");
          return;
        }
        this.displayAlert("successfully signed up", "success", () => {
          this._router.navigate(["login"]);
        });
      });
  }

  displayAlert(msg, type, callback?) {
    const message = msg ? msg : "no message initialized";
    this.alertData = {
      message,
      type
    };
    this.raiseAlert = true;
    setTimeout(() => {
      this.raiseAlert = false;
      if (callback) {
        callback();
      }
    }, 1500);
  }

  onSubmitBtn() {
    // do a post to DB
    let username = this.username;
    let password = this.password;
    let age = this.age;
    let gender = this.gender;
    if (this.showStudentSignup) {
      this.postToDb({
        name: username,
        password,
        age,
        gender,
        type: this.student.type,
        instrument: this.student.instrument
      });
    } else if (this.showTutorSignup) {
      this.postToDb({
        name: username,
        password,
        age,
        gender,
        type: this.tutor.type,
        location: this.tutor.location,
        instrument: this.tutor.instrument
      });
    } else if (this.showMusicianSignup) {
      this.postToDb({
        name: username,
        password,
        age,
        gender,
        type: this.musician.type,
        instrument: this.musician.instrument
      });
    } else if (this.showOrganizationSignup) {
      this.postToDb({
        name: username,
        password,
        age,
        gender,
        type: this.organization.type,
        orgName: this.organization.orgName,
        orgPhone: this.organization.orgPhone
      });
    } else {
      console.error("cannot sign up user");
    }
  }

  onCancelBtn() {
    this._router.navigate(["/login"]);
  }
}
