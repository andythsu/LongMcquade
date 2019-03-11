import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { AlertComponent } from "../alert/alert.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [LoginComponent, AlertComponent]
})
export class LoginModule {}
