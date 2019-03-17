import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthguardService } from "../services/authguard/authguard.service";
import { MusicianOverviewComponent } from "./musicianoverview.component";
import { MusicianHomeComponent } from "./musicianhome/musicianhome.component";

const routes: Routes = [
  {
    path: "musician/overview",
    component: MusicianOverviewComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: MusicianHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianOverviewRoutingModule {}
