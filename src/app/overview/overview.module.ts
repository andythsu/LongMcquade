import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverviewComponent } from "./overview.component";
import { AuthguardService } from "../services/authguard/authguard.service";
import { OverviewRoutingModule } from "./overview.routing.module";
import { BookingModule } from "./booking/booking.module";
import { RatingModule } from "./rating/rating.module";
import { ForumModule } from "./forum/forum.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    BookingModule,
    RatingModule,
    ForumModule,
    HomeModule
  ],
  declarations: [OverviewComponent],
  providers: [AuthguardService]
})
export class OverviewModule {}
