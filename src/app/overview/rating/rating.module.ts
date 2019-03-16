import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RatingComponent } from "./rating.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RatingComponent]
})
export class RatingModule {}
