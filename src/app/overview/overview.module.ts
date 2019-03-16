import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverviewComponent } from "./overview.component";
import { AuthguardService } from "../services/authguard/authguard.service";
import { OverviewRoutingModule } from "./overview.routing.module";
import { BookingModule } from "./booking/booking.module";
import { RatingModule } from "./rating/rating.module";
import { ForumModule } from "../forum/forum.module";
import { HomeModule } from "./home/home.module";
import { AlertModule } from "../alert/alert.module";
import { ForumPostModule } from "../forumpost/forumpost.module";

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    BookingModule,
    RatingModule,
    ForumModule,
    ForumPostModule,
    HomeModule,
    AlertModule
  ],
  declarations: [OverviewComponent],
  providers: [AuthguardService]
})
export class OverviewModule {}
