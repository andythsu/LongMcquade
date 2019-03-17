import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/utils/config";

@Component({
  selector: "app-musicianperformance",
  templateUrl: "./musicianperformance.component.html",
  styleUrls: ["./musicianperformance.component.css"]
})
export class MusicianPerformanceComponent implements OnInit {
  performances: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get(config.server + config.orgApi + "/performance")
      .subscribe(data => {
        this.performances = data;
      });
  }
}
