import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { tap, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  isLoggedIn = false;
  fakeUser = "aaa";
  fakePass = "123";
  currentUser: string;
  TOKEN: string = "user";

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN) !== null;
  }
  login(username, password): Promise<any> {
    return new Promise((resolve, reject) => {
      if (username == this.fakeUser && password == this.fakePass) {
        this.currentUser = username;
        localStorage.setItem(this.TOKEN, username);
        resolve(true);
      }
      resolve(false);
    });
  }
}
