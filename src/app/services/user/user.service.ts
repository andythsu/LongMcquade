import { Injectable } from "@angular/core";
import {
  student,
  tutor,
  musician,
  organization
} from "src/app/utils/interfaces/usertype";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public currentUser: student | tutor | musician | organization;
  constructor() {}

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser(): student | tutor | musician | organization {
    return this.currentUser;
  }
}
