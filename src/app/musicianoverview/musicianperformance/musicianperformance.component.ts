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
      .get<any>(config.server + config.orgApi + "/performance")
      .subscribe(data => {
        data = data.map(d => {
          const localDate = new Date(d.time).toLocaleDateString();
          const localTime = new Date(d.time).toLocaleTimeString();
          return { ...d, time: localDate + " " + localTime };
        });
        this.performances = data;
      });
  }
}
