import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup.component";
import { FormsModule } from "@angular/forms";
import { AlertModule } from "../alert/alert.module";

@NgModule({
  imports: [CommonModule, FormsModule, AlertModule],
  declarations: [SignupComponent]
})
export class SignupModule {}
