import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthguardService } from "../services/authguard/authguard.service";
import { MusicianOverviewComponent } from "./musicianoverview.component";
import { MusicianHomeComponent } from "./musicianhome/musicianhome.component";
import { ForumComponent } from "../forum/forum.component";
import { ForumPostComponent } from "../forumpost/forumpost.component";
import { MusicianPerformanceComponent } from "./musicianperformance/musicianperformance.component";

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
      },
      {
        path: "performance",
        component: MusicianPerformanceComponent
      },
      {
        path: "forum",
        component: ForumComponent
      },
      {
        path: "forum/post",
        component: ForumPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianOverviewRoutingModule {}
