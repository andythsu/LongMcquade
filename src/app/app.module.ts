import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { LoginModule } from "./login/login.module";
import { PagenotfoundModule } from "./pagenotfound/pagenotfound.module";
import { OverviewModule } from "./overview/overview.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    OverviewModule,
    BrowserModule,
    LoginModule,
    PagenotfoundModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
