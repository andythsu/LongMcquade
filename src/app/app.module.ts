import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { LoginModule } from "./login/login.module";
import { PagenotfoundModule } from "./pagenotfound/pagenotfound.module";
import { OverviewModule } from "./overview/overview.module";
import { TutorOverviewModule } from "./tutoroverview/tutoroverview.module";
import { SigninModule } from "./signin/signin.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    TutorOverviewModule,
    OverviewModule,
    SigninModule,
    LoginModule,
    PagenotfoundModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
