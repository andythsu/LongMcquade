import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public currentUser: string;
  constructor() {}

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
