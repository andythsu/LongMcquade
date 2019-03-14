import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  fakeUser = "aaa";
  fakePass = "123";
  fakeUserType = "student";
  TOKEN_NAME: string = "user";
  userService: UserService;

  constructor(private UserService: UserService) {
    this.userService = UserService;
  }

  isAuthenticated(): boolean {
    if (
      this.userService.getCurrentUser() === null ||
      this.userService.getCurrentUser() === undefined
    ) {
      this.userService.setCurrentUser(localStorage.getItem(this.TOKEN_NAME));
    }
    return (
      this.userService.getCurrentUser() !== null &&
      this.userService.getCurrentUser() !== undefined
    );
  }
  login(username, password): Promise<any> {
    return new Promise((resolve, reject) => {
      if (username == this.fakeUser && password == this.fakePass) {
        localStorage.setItem(this.TOKEN_NAME, username);
        resolve({
          success: true,
          type: this.fakeUserType
        });
      }
      resolve(false);
    });
  }
  logout() {
    this.userService.setCurrentUser(undefined);
    localStorage.removeItem(this.TOKEN_NAME);
  }
}
