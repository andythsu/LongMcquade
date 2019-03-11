import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TutorOverviewComponent } from "./tutoroverview.component";
import { TutorHomeModule } from "./tutorhome/tutorhome.module";
import { TutorOverviewRoutingModule } from "./tutoroverview.routing";

@NgModule({
  imports: [CommonModule, TutorHomeModule, TutorOverviewRoutingModule],
  declarations: [TutorOverviewComponent]
})
export class TutorOverviewModule {}
