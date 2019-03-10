import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverviewComponent } from "./overview.component";
import { BookingComponent } from "./booking/booking.component";
import { AuthguardService } from "../services/authguard/authguard.service";
import { RatingComponent } from "./rating/rating.component";
import { ForumComponent } from "./forum/forum.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "overview",
    component: OverviewComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "booking",
        component: BookingComponent
      },
      {
        path: "rating",
        component: RatingComponent
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
export class OverviewRoutingModule {}
