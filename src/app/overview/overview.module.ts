import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverviewComponent } from "./overview.component";
import { AuthguardService } from "../services/authguard/authguard.service";

@NgModule({
  imports: [CommonModule],
  declarations: [OverviewComponent],
  providers: [AuthguardService]
})
export class OverviewModule {}
