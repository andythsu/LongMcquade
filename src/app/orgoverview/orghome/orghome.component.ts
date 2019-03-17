import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { organization } from "src/app/utils/interfaces/usertype";

@Component({
  selector: "app-orghome",
  templateUrl: "./orghome.component.html",
  styleUrls: ["./orghome.component.css"]
})
export class OrgHomeComponent implements OnInit {
  user: organization;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }
}
