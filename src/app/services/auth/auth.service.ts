import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  fakeUser = "aaa";
  fakePass = "123";
  fakeUserType = "student";
  currentUser: string;
  TOKEN: string = "user";

  isAuthenticated(): boolean {
    if (this.currentUser === null || this.currentUser === undefined) {
      this.currentUser = localStorage.getItem(this.TOKEN);
    }
    return this.currentUser !== null && this.currentUser !== undefined;
  }
  login(username, password): Promise<any> {
    return new Promise((resolve, reject) => {
      if (username == this.fakeUser && password == this.fakePass) {
        this.currentUser = username;
        localStorage.setItem(this.TOKEN, this.currentUser);
        resolve({
          success: true,
          type: this.fakeUserType
        });
      }
      resolve(false);
    });
  }
  logout() {
    this.currentUser = undefined;
    localStorage.removeItem(this.TOKEN);
  }
}
