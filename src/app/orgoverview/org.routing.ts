import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthguardService } from "../services/authguard/authguard.service";
import { OrgOverviewComponent } from "./orgoverview.component";
import { OrgHomeComponent } from "./orghome/orghome.component";
import { ForumComponent } from "../forum/forum.component";
import { OrgPerformanceComponent } from "./orgperformance/orgperformance.component";

const routes: Routes = [
  {
    path: "org/overview",
    component: OrgOverviewComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: OrgHomeComponent
      },
      {
        path: "performance",
        component: OrgPerformanceComponent
      },
      {
        path: "forum",
        component: ForumComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgOverviewRoutingModule {}
