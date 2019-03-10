import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { OverviewComponent } from "./overview/overview.component";
import { AuthguardService } from "./services/authguard/authguard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "overview/:id",
    component: OverviewComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
