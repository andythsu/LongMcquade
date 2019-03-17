import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrgOverviewComponent } from "./orgoverview.component";
import { OrgOverviewRoutingModule } from "./org.routing";
import { OrgHomeModule } from "./orghome/orghome.module";
import { AlertModule } from "../alert/alert.module";
import { OrgPerformanceModule } from "./orgperformance/orgperformance.module";

@NgModule({
  imports: [
    CommonModule,
    OrgOverviewRoutingModule,
    OrgHomeModule,
    OrgPerformanceModule,
    AlertModule
  ],
  declarations: [OrgOverviewComponent]
})
export class OrgOverviewModule {}
