import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrgPerformanceComponent } from "./orgperformance.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [OrgPerformanceComponent]
})
export class OrgPerformanceModule {}
