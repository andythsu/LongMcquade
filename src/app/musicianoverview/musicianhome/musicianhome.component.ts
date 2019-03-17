import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { musician } from "src/app/utils/interfaces/usertype";

@Component({
  selector: "app-musicianhome",
  templateUrl: "./musicianhome.component.html",
  styleUrls: ["./musicianhome.component.css"]
})
export class MusicianHomeComponent implements OnInit {
  user: musician;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }
}
