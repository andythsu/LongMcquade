import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { LoginModule } from "./login/login.module";
import { PagenotfoundModule } from "./pagenotfound/pagenotfound.module";
import { OverviewModule } from "./overview/overview.module";
import { TutorOverviewModule } from "./tutoroverview/tutoroverview.module";
import { SignupModule } from "./signup/signup.module";
import { MusicianOverviewModule } from "./musicianoverview/musicianoverview.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TutorOverviewModule,
    MusicianOverviewModule,
    OverviewModule,
    SignupModule,
    LoginModule,
    PagenotfoundModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
