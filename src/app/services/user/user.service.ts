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
    // need to delete this afterwards
    if (!this.currentUser) {
      this.currentUser = {
        id: 4,
        name: "leo",
        age: 19,
        gender: 0,
        password: "12345",
        type: 2,
        instrument: "guitar"
      };
    }
    return this.currentUser;
  }
}
