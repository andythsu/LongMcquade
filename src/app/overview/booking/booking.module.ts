import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingComponent } from "./booking.component";
import { AlertModule } from "src/app/alert/alert.module";

@NgModule({
  imports: [CommonModule, AlertModule],
  declarations: [BookingComponent]
})
export class BookingModule {}
