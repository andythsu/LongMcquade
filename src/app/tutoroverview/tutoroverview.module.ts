import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TutorOverviewComponent } from "./tutoroverview.component";
import { TutorHomeModule } from "./tutorhome/tutorhome.module";
import { TutorOverviewRoutingModule } from "./tutoroverview.routing";
import { TutoravailabletimeModule } from "./tutoravailabletime/tutoravailabletime.module";
import { AlertModule } from "../alert/alert.module";

@NgModule({
  imports: [
    CommonModule,
    AlertModule,
    TutorHomeModule,
    TutorOverviewRoutingModule,
    TutoravailabletimeModule
  ],
  declarations: [TutorOverviewComponent]
})
export class TutorOverviewModule {}
