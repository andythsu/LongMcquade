import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  user: string;
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = this._activatedRoute.snapshot.paramMap.get("id");
  }
}
