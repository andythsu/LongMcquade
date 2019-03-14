import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserTypeEnum } from "../utils/constants/usertype";

import {
  student,
  tutor,
  musician,
  organization
} from "../utils/interfaces/usertype";

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
    name: "",
    type: UserTypeEnum.ORGANIZATION
  };

  constructor(private _router: Router) {}

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

  onSubmitBtn() {
    // do a post to DB
    if (this.showStudentSignup) {
      console.log(this.student);
    } else if (this.showTutorSignup) {
      console.log(this.tutor);
    } else if (this.showMusicianSignup) {
      console.log(this.musician);
    } else if (this.showOrganizationSignup) {
      console.log(this.organization);
    } else {
      console.error("cannot sign up user");
    }
    // this._router.navigate(["login"]);
  }

  onCancelBtn() {
    this._router.navigate(["/login"]);
  }
}
