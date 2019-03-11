import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AlertModule } from "../alert/alert.module";

import { LoginComponent } from "./login.component";

@NgModule({
  imports: [CommonModule, FormsModule, AlertModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
