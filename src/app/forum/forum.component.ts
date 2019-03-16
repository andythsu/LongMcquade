import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user/user.service";
import { HttpClient } from "@angular/common/http";

import { config } from "../utils/config";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.css"]
})
export class ForumComponent implements OnInit {
  forums: any;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.httpClient.get(config.server + "/forum").subscribe(data => {
      this.forums = data;
    });
  }

  onPostForumBtn() {
    this.router.navigate(["post"], {
      relativeTo: this.activatedRoute
    });
  }
}
