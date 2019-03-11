import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin.component";
import { FormsModule } from "@angular/forms";
import { AlertModule } from "../alert/alert.module";

@NgModule({
  imports: [CommonModule, FormsModule, AlertModule],
  declarations: [SigninComponent]
})
export class SigninModule {}
