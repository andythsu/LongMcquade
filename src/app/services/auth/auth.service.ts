import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";
import { HttpClient } from "@angular/common/http";

import { config } from "../../utils/config";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  fakeUser = "aaa";
  fakePass = "123";
  fakeUserType = "student";
  TOKEN_NAME: string = "userId";

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  isAuthenticated(): boolean {
    return (
      this.userService.getCurrentUser() !== null &&
      this.userService.getCurrentUser() !== undefined
    );
  }
  login(username, password): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post<any>(config.server + config.userApi + "/userLogin", {
          username,
          password
        })
        .subscribe(data => {
          if (data.error) {
            reject(data.error.message);
            return;
          }
          this.userService.setCurrentUser(data);
          const type = this.userService.getCurrentUser().type;
          const id = this.userService.getCurrentUser().id.toString();
          localStorage.setItem(this.TOKEN_NAME, id);
          resolve({
            success: true,
            type
          });
        });
    });
  }
  logout() {
    this.userService.setCurrentUser(undefined);
    localStorage.removeItem(this.TOKEN_NAME);
  }
}
