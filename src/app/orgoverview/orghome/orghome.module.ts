import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrgHomeComponent } from "./orghome.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [OrgHomeComponent]
})
export class OrgHomeModule {}
