import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorOverviewComponent } from "./tutoroverview.component";
import { AuthguardService } from "../services/authguard/authguard.service";
import { TutorHomeComponent } from "./tutorhome/tutorhome.component";
import { ForumComponent } from "../forum/forum.component";
import { ForumPostComponent } from "../forumpost/forumpost.component";
import { TutoravailabletimeComponent } from "./tutoravailabletime/tutoravailabletime.component";

const routes: Routes = [
  {
    path: "tutor/overview",
    component: TutorOverviewComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: TutorHomeComponent
      },
      {
        path: "forum",
        component: ForumComponent
      },
      {
        path: "availableTime",
        component: TutoravailabletimeComponent
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
export class TutorOverviewRoutingModule {}
