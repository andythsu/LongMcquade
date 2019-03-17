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
        id: 5,
        name: "abcpub",
        age: 30,
        gender: 1,
        password: "12345",
        type: 1,
        orgName: "ABC pub"
      };
    }
    return this.currentUser;
  }
}
