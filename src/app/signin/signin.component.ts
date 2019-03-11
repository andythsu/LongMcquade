import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  public alertData: any;

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmit() {
    // do a post to DB
    this._router.navigate(["login"]);
  }
}
